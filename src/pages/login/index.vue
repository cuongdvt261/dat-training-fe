<template>
  <Form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" :validation-schema="schema" @submit="submitForm">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username"> Username </label>
      <Field
        name="username"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        v-model="formData.username"
        placeholder="Username"
      />
      <ErrorMessage name="username" />
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password"> Password </label>
      <Field
        name="password"
        class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        type="password"
        v-model="formData.password"
        placeholder="******************"
      />
      <ErrorMessage name="password" />
      <p class="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div class="flex items-center justify-between">
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
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
import axios from 'axios'

const schema = object({
  username: string().required(),
  password: string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/[a-zA-Z0-9]/, 'Password can only contain letters and numbers.'),
})

let formData = {
  username: '',
  password: ''
}

function submitForm() {
  axios
    .post('http://localhost:8081/api/auth/signin', formData)
    .then((Response) => console.log(Response))
}
</script>
