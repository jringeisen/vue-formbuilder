// Form storage utility for handling form persistence
// Currently uses localStorage, can be extended to use API endpoints

export class FormStorage {
  constructor() {
    this.prefix = 'vue_form_'
  }

  // Store form data with unique ID
  store(formId, formData, config = {}) {
    const storage = {
      id: formId,
      data: formData,
      config: config,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }

    try {
      localStorage.setItem(this.prefix + formId, JSON.stringify(storage))
      return true
    } catch (error) {
      console.error('Failed to store form data:', error)
      return false
    }
  }

  // Retrieve form data by ID
  retrieve(formId) {
    try {
      const data = localStorage.getItem(this.prefix + formId)
      if (data) {
        return JSON.parse(data)
      }
      return null
    } catch (error) {
      console.error('Failed to retrieve form data:', error)
      return null
    }
  }

  // List all stored forms
  listForms() {
    const forms = []
    try {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        if (key && key.startsWith(this.prefix)) {
          const data = localStorage.getItem(key)
          if (data) {
            const parsed = JSON.parse(data)
            forms.push({
              id: parsed.id,
              createdAt: parsed.createdAt,
              updatedAt: parsed.updatedAt,
              fieldCount: parsed.data?.length || 0
            })
          }
        }
      }
    } catch (error) {
      console.error('Failed to list forms:', error)
    }
    return forms
  }

  // Delete form by ID
  delete(formId) {
    try {
      localStorage.removeItem(this.prefix + formId)
      return true
    } catch (error) {
      console.error('Failed to delete form:', error)
      return false
    }
  }

  // Update form data
  update(formId, formData, config = {}) {
    const existing = this.retrieve(formId)
    if (existing) {
      existing.data = formData
      existing.config = { ...existing.config, ...config }
      existing.updatedAt = new Date().toISOString()
      
      try {
        localStorage.setItem(this.prefix + formId, JSON.stringify(existing))
        return true
      } catch (error) {
        console.error('Failed to update form data:', error)
        return false
      }
    }
    return false
  }

  // Check if form exists
  exists(formId) {
    return localStorage.getItem(this.prefix + formId) !== null
  }

  // Clear all forms
  clear() {
    try {
      const keysToDelete = []
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i)
        if (key && key.startsWith(this.prefix)) {
          keysToDelete.push(key)
        }
      }
      
      keysToDelete.forEach(key => localStorage.removeItem(key))
      return true
    } catch (error) {
      console.error('Failed to clear forms:', error)
      return false
    }
  }
}

// Export singleton instance
export const formStorage = new FormStorage()

// Composable for Vue components
export function useFormStorage() {
  return {
    store: formStorage.store.bind(formStorage),
    retrieve: formStorage.retrieve.bind(formStorage),
    listForms: formStorage.listForms.bind(formStorage),
    delete: formStorage.delete.bind(formStorage),
    update: formStorage.update.bind(formStorage),
    exists: formStorage.exists.bind(formStorage),
    clear: formStorage.clear.bind(formStorage)
  }
}