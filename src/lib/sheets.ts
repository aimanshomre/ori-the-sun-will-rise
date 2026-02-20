const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  message?: string;
}

export async function submitToGoogleSheets(data: FormData): Promise<{ success: boolean }> {
  const payload = {
    ...data,
    timestamp: new Date().toISOString(),
  };

  await fetch(GOOGLE_SCRIPT_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
    body: JSON.stringify(payload),
  });

  return { success: true };
}
