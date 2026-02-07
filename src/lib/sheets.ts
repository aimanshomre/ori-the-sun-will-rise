const GOOGLE_SCRIPT_URL = 'YOUR_DEPLOYED_WEB_APP_URL_HERE'; // Replace after deploying Apps Script

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  message?: string;
}

export async function submitToGoogleSheets(data: FormData): Promise<{ success: boolean }> {
  await fetch(GOOGLE_SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return { success: true };
}
