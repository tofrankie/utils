<template>
  <div class="playground-version">
    <div class="version-selector">
      <label for="version-select">Select Version:</label>
      <select id="version-select" v-model="selectedVersion" @change="updatePlayground">
        <option value="latest">Latest (0.0.1)</option>
        <option value="stable">Stable (0.0.1)</option>
        <option value="beta">Beta (0.0.1-beta)</option>
      </select>
    </div>

    <div class="playground-container">
      <iframe
        :src="playgroundUrl"
        width="100%"
        height="600"
        frameborder="0"
        allow="clipboard-write"
        sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox"
        :title="`JavaScript Utils Playground - ${selectedVersion}`"
      ></iframe>
    </div>

    <div class="quick-actions">
      <h4>Quick Experience</h4>
      <div class="action-buttons">
        <a
          v-for="action in quickActions"
          :key="action.name"
          :href="getActionUrl(action)"
          target="_blank"
          class="action-button"
          :style="{ backgroundColor: action.color }"
        >
          {{ action.icon }} {{ action.name }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const selectedVersion = ref('latest')

const versionMap = {
  latest: '0.0.1',
  stable: '0.0.1',
  beta: '0.0.1-beta',
}

const quickActions = [
  { name: 'Debounce/Throttle', icon: '🎯', file: 'index.js', color: '#4F46E5' },
  { name: 'Array Utils', icon: '📊', file: 'array-demo.js', color: '#059669' },
  { name: 'Object Utils', icon: '🗂️', file: 'object-demo.js', color: '#DC2626' },
  { name: 'String Utils', icon: '📝', file: 'string-demo.js', color: '#7C3AED' },
  { name: 'Validation Utils', icon: '✅', file: 'validation-demo.js', color: '#EA580C' },
]

const playgroundUrl = computed(() => {
  const version = versionMap[selectedVersion.value]
  return `https://stackblitz.com/edit/javascript-utils-playground?embed=1&file=index.js&hideExplorer=1&hideNavigation=1&theme=light&packageManager=pnpm&packageName=javascript-utils@${version}`
})

const getActionUrl = (action) => {
  const version = versionMap[selectedVersion.value]
  return `https://stackblitz.com/edit/javascript-utils-playground?file=${action.file}&embed=1&packageManager=pnpm&packageName=javascript-utils@${version}`
}

const updatePlayground = () => {
  // Version switching will automatically update iframe src
  console.log(`Switched to version: ${selectedVersion.value}`)
}
</script>

<style scoped>
.playground-version {
  margin: 2rem 0;
}

.version-selector {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  margin-bottom: 1rem;
}

.version-selector label {
  font-weight: 500;
  color: var(--vp-c-text-1);
}

.version-selector select {
  padding: 0.5rem;
  font-size: 14px;
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-border);
  border-radius: 6px;
}

.playground-container {
  margin-bottom: 2rem;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.quick-actions h4 {
  margin-bottom: 1rem;
  color: var(--vp-c-text-1);
}

.action-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.action-button {
  display: inline-block;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  color: white;
  text-decoration: none;
  border-radius: 6px;
  transition: opacity 0.2s;
}

.action-button:hover {
  text-decoration: none;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .action-buttons {
    flex-direction: column;
  }

  .action-button {
    text-align: center;
  }
}
</style>
