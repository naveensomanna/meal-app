'use server'


export async function authenticate(formData: FormData) {
  try {
    await new Promise((res) => setTimeout(() => res(10), 1000))
  } catch (error) {
    if (error) {
      switch (error) {
        case 'CredentialsSignin':
          return 'Invalid credentials.'
        default:
          return 'Something went wrong.'
      }
    }
    throw error
  }
}
