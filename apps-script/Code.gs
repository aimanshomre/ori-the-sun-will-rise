/**
 * Google Apps Script - Lead Form Backend
 *
 * This script receives lead form submissions from the Ori Hukima website,
 * stores them in a Google Sheet, and sends email notifications.
 *
 * Setup Instructions:
 * 1. Go to script.google.com and create a new project
 * 2. Paste this code
 * 3. Update the configuration constants below
 * 4. Run testWriteToSheet to authorize
 * 5. Deploy as Web App (Execute as: Me, Access: Anyone)
 */

// ============================================
// CONFIGURATION - UPDATE THESE VALUES
// ============================================

// TODO: Replace with your actual Google Sheet ID
// Find it in the sheet URL: https://docs.google.com/spreadsheets/d/YOUR_SPREADSHEET_ID_HERE/edit
const SPREADSHEET_ID = 'PASTE_YOUR_SPREADSHEET_ID_HERE';

// Sheet name where leads will be stored (will be created if doesn't exist)
const SHEET_NAME = 'Leads';

// TODO: Replace with your email address for notifications
const NOTIFY_EMAIL = 'ori6hukima@gmail.com';

// ============================================
// MAIN HANDLERS
// ============================================

/**
 * Handles POST requests from the website contact form
 * Parses JSON data, writes to sheet, and sends notification email
 *
 * @param {Object} e - Event object containing POST data
 * @returns {ContentService.TextOutput} JSON response
 */
function doPost(e) {
  try {
    // Parse JSON data from request body
    const data = JSON.parse(e.postData.contents);

    // Validate required fields
    if (!data.fullName || !data.phone || !data.email) {
      throw new Error('Missing required fields');
    }

    // Use LockService to prevent concurrent write conflicts
    const lock = LockService.getScriptLock();
    const hasLock = lock.tryLock(30000);

    if (!hasLock) {
      throw new Error('Could not obtain lock - server busy');
    }

    try {
      // Write lead to spreadsheet
      writeLeadToSheet(data);

      // Send notification email
      sendNotificationEmail(data);

      // Return success response
      return createJsonResponse({ success: true, message: 'Lead saved successfully' });

    } finally {
      lock.releaseLock();
    }

  } catch (error) {
    console.error('Error processing lead:', error.message);

    // Send error notification email
    sendErrorEmail(error, e.postData ? e.postData.contents : 'No payload');

    return createJsonResponse({
      success: false,
      error: error.message || 'Unknown error occurred'
    });
  }
}

/**
 * Handles GET requests (for testing/health check)
 *
 * @returns {ContentService.TextOutput} JSON response
 */
function doGet() {
  return createJsonResponse({
    status: 'ok',
    message: 'Ori Hukima Lead API is running',
    timestamp: new Date().toISOString()
  });
}

// ============================================
// SHEET OPERATIONS
// ============================================

/**
 * Writes lead data to the Google Sheet
 * Creates the sheet and headers if they don't exist
 *
 * @param {Object} data - Lead data object
 */
function writeLeadToSheet(data) {
  const ss = SpreadsheetApp.openById(SPREADSHEET_ID);

  let sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
    sheet.appendRow(['תאריך', 'שם מלא', 'טלפון', 'אימייל', 'הודעה']);
    sheet.getRange(1, 1, 1, 5).setFontWeight('bold');
  }

  const rowData = [
    data.timestamp || new Date().toISOString(),
    data.fullName || '',
    data.phone || '',
    data.email || '',
    data.message || ''
  ];

  sheet.appendRow(rowData);
  console.log('Lead written to sheet:', data.email);
}

// ============================================
// EMAIL NOTIFICATIONS
// ============================================

/**
 * Sends email notification for new lead
 * Styled with Ori Hukima brand colors (sand #C9B59C)
 *
 * @param {Object} data - Lead data object
 */
function sendNotificationEmail(data) {
  const subject = 'ליד חדש מהאתר - אורי חוכימה';

  const htmlBody = `
    <!DOCTYPE html>
    <html dir="rtl" lang="he">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 0; background-color: #FAFAF8; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #FAFAF8;">
        <tr>
          <td align="center" style="padding: 40px 20px;">
            <!-- Main Container -->
            <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; width: 100%;">

              <!-- Header -->
              <tr>
                <td style="background: linear-gradient(135deg, #2A2520 0%, #3D3730 100%); padding: 40px 40px 30px; border-radius: 16px 16px 0 0; text-align: center;">
                  <!-- Sand Decorative Line -->
                  <table role="presentation" width="60" cellspacing="0" cellpadding="0" border="0" align="center">
                    <tr>
                      <td style="height: 3px; background: linear-gradient(90deg, transparent, #C9B59C, transparent);"></td>
                    </tr>
                  </table>
                  <h1 style="color: #FAFAF8; font-size: 28px; font-weight: 300; margin: 20px 0 10px; letter-spacing: 1px;">ליד חדש התקבל</h1>
                  <p style="color: #C9B59C; font-size: 14px; margin: 0; font-weight: 500;">מאתר אורי חוכימה</p>
                </td>
              </tr>

              <!-- Content Area -->
              <tr>
                <td style="background-color: #ffffff; padding: 0;">

                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tr>
                      <td style="padding: 40px;">

                        <!-- Name Section -->
                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom: 24px;">
                          <tr>
                            <td style="padding: 20px; background-color: #F2EDE8; border-radius: 12px; border-right: 4px solid #C9B59C;">
                              <p style="color: #7A7068; font-size: 12px; margin: 0 0 6px; text-transform: uppercase; letter-spacing: 1px;">שם מלא</p>
                              <p style="color: #1A1A1A; font-size: 20px; margin: 0; font-weight: 600;">${escapeHtml(data.fullName)}</p>
                            </td>
                          </tr>
                        </table>

                        <!-- Contact Details Grid -->
                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom: 24px;">
                          <tr>
                            <!-- Phone -->
                            <td width="48%" style="padding: 16px 20px; background-color: #2A2520; border-radius: 10px; vertical-align: top;">
                              <p style="color: #C9B59C; font-size: 11px; margin: 0 0 6px; text-transform: uppercase; letter-spacing: 1px;">טלפון</p>
                              <p style="color: #FAFAF8; font-size: 16px; margin: 0; font-weight: 500; direction: ltr; text-align: right;">${escapeHtml(data.phone)}</p>
                            </td>
                            <td width="4%"></td>
                            <!-- Email -->
                            <td width="48%" style="padding: 16px 20px; background-color: #2A2520; border-radius: 10px; vertical-align: top;">
                              <p style="color: #C9B59C; font-size: 11px; margin: 0 0 6px; text-transform: uppercase; letter-spacing: 1px;">אימייל</p>
                              <p style="color: #FAFAF8; font-size: 14px; margin: 0; font-weight: 500; direction: ltr; text-align: right; word-break: break-all;">${escapeHtml(data.email)}</p>
                            </td>
                          </tr>
                        </table>

                        <!-- Message Section -->
                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom: 24px;">
                          <tr>
                            <td style="padding: 20px; background-color: #F2EDE8; border-radius: 12px; border: 1px solid #E5DDD4;">
                              <p style="color: #7A7068; font-size: 12px; margin: 0 0 10px; text-transform: uppercase; letter-spacing: 1px;">הודעה</p>
                              <p style="color: #1A1A1A; font-size: 15px; margin: 0; line-height: 1.7;">${data.message ? escapeHtml(data.message) : '<span style="color: #B8A48A; font-style: italic;">לא הוזנה הודעה</span>'}</p>
                            </td>
                          </tr>
                        </table>

                        <!-- Timestamp -->
                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                          <tr>
                            <td align="center">
                              <p style="color: #B8A48A; font-size: 12px; margin: 0;">
                                <span style="color: #C9B59C;">●</span>&nbsp;&nbsp;התקבל בתאריך: ${formatTimestamp(data.timestamp)}&nbsp;&nbsp;<span style="color: #C9B59C;">●</span>
                              </p>
                            </td>
                          </tr>
                        </table>

                      </td>
                    </tr>
                  </table>

                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background: linear-gradient(135deg, #2A2520 0%, #3D3730 100%); padding: 30px 40px; border-radius: 0 0 16px 16px; text-align: center;">
                  <table role="presentation" width="40" cellspacing="0" cellpadding="0" border="0" align="center" style="margin-bottom: 16px;">
                    <tr>
                      <td style="height: 2px; background-color: #C9B59C;"></td>
                    </tr>
                  </table>
                  <p style="color: #8A7E74; font-size: 12px; margin: 0 0 8px;">הודעה זו נשלחה אוטומטית ממערכת הלידים</p>
                  <p style="color: #5A524A; font-size: 11px; margin: 0;">אורי חוכימה | הרצאות מנהיגות וחוסן</p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    subject: subject,
    htmlBody: htmlBody,
    name: 'אתר אורי חוכימה'
  });

  console.log('Notification email sent to:', NOTIFY_EMAIL);
}

/**
 * Sends error notification email when something goes wrong
 *
 * @param {Error} error - The error object
 * @param {string} payload - The original request payload
 */
function sendErrorEmail(error, payload) {
  const subject = '⚠️ שגיאה במערכת הלידים - אורי חוכימה';

  const htmlBody = `
    <!DOCTYPE html>
    <html dir="rtl" lang="he">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 0; background-color: #FAFAF8; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #FAFAF8;">
        <tr>
          <td align="center" style="padding: 40px 20px;">
            <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; width: 100%;">

              <!-- Header with Error Theme -->
              <tr>
                <td style="background: linear-gradient(135deg, #8b2635 0%, #6b1d29 100%); padding: 40px 40px 30px; border-radius: 16px 16px 0 0; text-align: center;">
                  <p style="font-size: 40px; margin: 0 0 10px;">⚠️</p>
                  <h1 style="color: #FAFAF8; font-size: 24px; font-weight: 300; margin: 0 0 10px; letter-spacing: 1px;">שגיאה במערכת</h1>
                  <p style="color: #f5c6cb; font-size: 14px; margin: 0;">נדרשת בדיקה</p>
                </td>
              </tr>

              <!-- Content Area -->
              <tr>
                <td style="background-color: #ffffff; padding: 40px;">

                  <!-- Error Message -->
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom: 24px;">
                    <tr>
                      <td style="padding: 20px; background-color: #fef2f2; border-radius: 12px; border-right: 4px solid #dc3545;">
                        <p style="color: #8b2635; font-size: 12px; margin: 0 0 8px; text-transform: uppercase; letter-spacing: 1px; font-weight: 600;">הודעת שגיאה</p>
                        <p style="color: #1A1A1A; font-size: 15px; margin: 0; line-height: 1.6;">${escapeHtml(error.message || 'שגיאה לא ידועה')}</p>
                      </td>
                    </tr>
                  </table>

                  <!-- Payload Section -->
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom: 24px;">
                    <tr>
                      <td>
                        <p style="color: #7A7068; font-size: 12px; margin: 0 0 10px; text-transform: uppercase; letter-spacing: 1px;">נתונים שהתקבלו</p>
                        <div style="padding: 16px; background-color: #2A2520; border-radius: 10px; overflow-x: auto;">
                          <pre style="color: #B8A48A; font-size: 12px; margin: 0; direction: ltr; text-align: left; white-space: pre-wrap; word-break: break-all; font-family: 'Courier New', monospace;">${escapeHtml(payload)}</pre>
                        </div>
                      </td>
                    </tr>
                  </table>

                  <!-- Stack Trace -->
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="margin-bottom: 24px;">
                    <tr>
                      <td>
                        <p style="color: #7A7068; font-size: 12px; margin: 0 0 10px; text-transform: uppercase; letter-spacing: 1px;">פרטים טכניים</p>
                        <div style="padding: 16px; background-color: #F2EDE8; border-radius: 10px; border: 1px solid #E5DDD4; overflow-x: auto;">
                          <pre style="color: #5A524A; font-size: 11px; margin: 0; direction: ltr; text-align: left; white-space: pre-wrap; word-break: break-all; font-family: 'Courier New', monospace;">${escapeHtml(error.stack || 'אין מידע נוסף')}</pre>
                        </div>
                      </td>
                    </tr>
                  </table>

                  <!-- Timestamp -->
                  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tr>
                      <td align="center">
                        <p style="color: #B8A48A; font-size: 12px; margin: 0;">
                          תאריך: ${new Date().toLocaleString('he-IL')}
                        </p>
                      </td>
                    </tr>
                  </table>

                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background: linear-gradient(135deg, #2A2520 0%, #3D3730 100%); padding: 24px 40px; border-radius: 0 0 16px 16px; text-align: center;">
                  <p style="color: #8A7E74; font-size: 12px; margin: 0;">התראה אוטומטית ממערכת הלידים - אורי חוכימה</p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  try {
    MailApp.sendEmail({
      to: NOTIFY_EMAIL,
      subject: subject,
      htmlBody: htmlBody,
      name: 'אתר אורי חוכימה - התראת שגיאה'
    });
    console.log('Error notification email sent');
  } catch (emailError) {
    console.error('Failed to send error email:', emailError.message);
  }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

function createJsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

function escapeHtml(text) {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function formatTimestamp(isoTimestamp) {
  if (!isoTimestamp) return new Date().toLocaleString('he-IL');
  try {
    const date = new Date(isoTimestamp);
    return date.toLocaleString('he-IL', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  } catch (e) {
    return isoTimestamp;
  }
}

// ============================================
// TEST FUNCTIONS
// ============================================

function testWriteToSheet() {
  const testData = {
    timestamp: new Date().toISOString(),
    fullName: 'Test User',
    phone: '0541234567',
    email: 'test@example.com',
    message: 'This is a test message'
  };

  writeLeadToSheet(testData);
  console.log('Test write completed');
}

function testSendEmail() {
  const testData = {
    timestamp: new Date().toISOString(),
    fullName: 'Test User',
    phone: '0541234567',
    email: 'test@example.com',
    message: 'This is a test message'
  };

  sendNotificationEmail(testData);
  console.log('Test email sent');
}
