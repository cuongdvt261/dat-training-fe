<template>
  <Form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" :validation-schema="schema" @submit="submitForm">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username"> Username </label>
      <Field
        v-model="formData.username"
        name="username"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        placeholder="Username"
      />
      <ErrorMessage name="username" />
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password"> Password </label>
      <Field
        v-model="formData.password"
        name="password"
        class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        type="password"
        placeholder="******************"
      />
      <ErrorMessage name="password" />
      <p class="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div class="flex items-center justify-between">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        Sign In
      </button>
      <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
  </Form>
</template>

<script setup lang="ts">
import { string, object } from 'yup'
import { Form, Field, ErrorMessage } from 'vee-validate'
import { useAuthStore } from '@/stores'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toast-notification'

const $router = useRouter()
const $toast = useToast()

let formData = {
  username: '',
  password: '',
}

const schema = object({
  username: string().required(),
  password: string()
    .required('No password provided.')
    .min(6, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z0-9]/, 'Password can only contain letters and numbers.'),
})

async function submitForm() {
  try {
    const authStore = useAuthStore()
    const { username, password } = formData
    await authStore.login(username, password)
    $router.push('/')
  } catch (err) {
    $toast.error((err as Error).message)
  }
}
</script>
