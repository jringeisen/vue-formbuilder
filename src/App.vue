<template>
  <div id="app" class="flex min-h-screen bg-slate-50">
    <!-- Left Sidebar - Form Builder -->
    <div class="w-96 bg-white border-r border-slate-200 shadow-sm flex flex-col">
      <!-- Sidebar Header -->
      <div class="bg-slate-50 px-6 py-4 border-b border-slate-200 flex-shrink-0">
        <h2 class="text-lg font-semibold text-slate-900">Form Builder</h2>
        <p class="text-sm text-slate-600 mt-1">Build your form</p>
      </div>
      
      <!-- Sidebar Content -->
      <div class="flex-1 overflow-y-auto">
        <div class="p-6">
          <form-builder v-model="formData" />
        </div>
      </div>
    </div>

    <!-- Main Content Area - Form Preview -->
    <div class="flex-1 flex flex-col">
      <!-- Main Header -->
      <div class="bg-white border-b border-slate-200 shadow-sm flex-shrink-0">
        <div class="px-8 py-6">
          <div class="flex items-center justify-between">
            <div>
              <h1 class="text-2xl font-bold text-slate-900">Vue FormBuilder</h1>
              <p class="text-slate-600 mt-1">Real-time form preview</p>
            </div>
            <div class="flex items-center space-x-2 text-sm text-slate-500">
              <span class="inline-flex items-center px-2.5 py-0.5 rounded-full bg-green-100 text-green-800">
                <svg class="w-2 h-2 mr-1" fill="currentColor" viewBox="0 0 8 8">
                  <circle cx="4" cy="4" r="3" />
                </svg>
                Live Preview
              </span>
              <span>{{ formData.length }} field{{ formData.length !== 1 ? 's' : '' }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Preview Content -->
      <div class="flex-1 overflow-y-auto bg-gradient-to-br from-slate-50 to-blue-50">
        <div class="p-8">
          <div class="max-w-4xl mx-auto">
            <div class="bg-white rounded-xl shadow-sm border border-slate-200 min-h-96">
              <div class="p-8">
                <form-render :form-json="formData" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import FormBuilder from './components/FormBuilder.vue'
import FormRender from './components/FormRender.vue'

// Single reactive form data that both components share via v-model
const formData = ref([])
</script>
