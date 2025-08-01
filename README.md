# Vue 3 FormBuilder with TailwindCSS v4

A modern Vue 3 form builder component using the Composition API and TailwindCSS v4. Build dynamic forms with drag-and-drop functionality and render them from JSON configuration.

## ✨ Features

- **Vue 3 + Composition API**: Modern Vue.js with reactive composition functions
- **TailwindCSS v4**: Latest Tailwind with Oxide engine for better performance
- **TypeScript Ready**: Full TypeScript support with proper prop definitions
- **Vite Build System**: Fast development and optimized production builds
- **Multiple Field Types**: Headers, paragraphs, inputs, textareas, selects, and buttons
- **Form Validation**: Built-in required field validation
- **JSON Export/Import**: Save and restore form configurations
- **🚀 Embeddable Forms**: Generate code snippets to embed forms on any website
- **📝 Custom Endpoints**: Configure form submission endpoints for data handling
- **🎨 Multiple Embed Types**: iFrame, JavaScript widget, and direct HTML options

## 📦 Installation

```bash
npm install @jringeisen/vue-formbuilder
```

## 🚀 Getting Started

### Vue 3 Setup

**Option 1: Global Registration**
```javascript
import { createApp } from 'vue'
import VueFormBuilder from '@jringeisen/vue-formbuilder'
import '@jringeisen/vue-formbuilder/style.css'

const app = createApp(App)
app.use(VueFormBuilder)
app.mount('#app')
```

**Option 2: Component Import**
```javascript
import { FormBuilder, FormRender } from '@jringeisen/vue-formbuilder'
import '@jringeisen/vue-formbuilder/style.css'

export default {
  components: {
    FormBuilder,
    FormRender
  }
}
```

### Using FormBuilder

```vue
<template>
  <form-builder @form="handleFormUpdate" />
</template>

<script setup>
import { ref } from 'vue'

const formData = ref([])

const handleFormUpdate = (formConfig) => {
  formData.value = formConfig
  // Save to database, localStorage, etc.
}
</script>
```

### Using FormRender

```vue
<template>
  <form-render :form-json="savedFormConfig" />
</template>

<script setup>
import { ref } from 'vue'

const savedFormConfig = ref([
  // Your saved form configuration array
])
</script>
```

## 🚀 Embeddable Forms

Generate embeddable code snippets to integrate forms into any website:

### Using the Embed Generator

1. **Build your form** using the FormBuilder component
2. **Click the "Embed" button** in the sidebar
3. **Configure your submission endpoint** (where form data will be sent)
4. **Choose embed type** (iFrame, JavaScript, or Direct HTML)
5. **Copy the generated code** and paste it into your website

### Embed Types

**iFrame Embed (Recommended)**
```html
<iframe
  src="https://your-domain.com/embed/FORM_ID?endpoint=YOUR_ENDPOINT"
  width="100%"
  height="auto"
  frameborder="0"
  style="border: none; min-height: 400px;"
  title="Form">
</iframe>
```

**JavaScript Widget**
```html
<div id="form-FORM_ID"></div>
<script>
  (function() {
    var iframe = document.createElement('iframe');
    iframe.src = 'https://your-domain.com/embed/FORM_ID?endpoint=YOUR_ENDPOINT';
    iframe.width = '100%';
    iframe.height = 'auto';
    iframe.frameBorder = '0';
    iframe.style.border = 'none';
    iframe.style.minHeight = '400px';
    document.getElementById('form-FORM_ID').appendChild(iframe);
  })();
</script>
```

**Direct HTML**
- Complete standalone HTML form with inline styles
- No external dependencies required
- Perfect for email templates or simple integrations

### Form Submissions

Configure your endpoint to receive POST requests with JSON data:

```json
{
  "formId": "abc123",
  "timestamp": "2024-01-01T12:00:00Z",
  "data": {
    "field_name": "field_value",
    "email": "user@example.com"
  }
}
```

## 🎨 Styling

The package includes TailwindCSS v4 styles. You have two options:

1. **Import the built CSS** (recommended):
```javascript
import '@jringeisen/vue-formbuilder/style.css'
```

2. **Use your own TailwindCSS setup** and import the raw components.

# ToDo
- [X] Convert to a package
- [X] Add a form render component
- [X] Add embeddable forms functionality
- [X] Add custom submission endpoints
- [ ] Add more field options
- [ ] Make fields draggable
- [ ] Add form themes and styling options
- [ ] Add analytics and submission tracking

<img src="public/images/formbuilder.png">
<img src="public/images/formrender.png">
