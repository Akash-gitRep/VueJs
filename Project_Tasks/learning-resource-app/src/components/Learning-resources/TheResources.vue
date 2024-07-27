<template>
  <div>
    <base-card>
      <base-button @click="setSelectedTab('StoredResources')" :mode="storedResButtonMode">Stored Resource</base-button>
      <base-button @click="setSelectedTab('AddingResources')" :mode="addResButtonMode">Add Resource</base-button>
    </base-card>
    <keep-alive>
      <component :is="selectedTab"></component>
    </keep-alive>
  </div>
</template>

<script>
import StoredResources from './StoredResources.vue';
import AddingResources from './AddingResources.vue';
import LearningResource from './LearningResource.vue'

export default {
  components: {
    StoredResources,
    AddingResources,
    LearningResource
  },
  data() {
    return {
      selectedTab: 'StoredResources', // Use the component name as the value
      storedResources: [
        {
          id: 'official-page',
          title: 'Official guide',
          description: 'The official Vue.js documentation',
          link: 'https://vuejs.org/'
        },
        {
          id: 'google-page',
          title: 'Google guide',
          description: 'The official Google JavaScript documentation',
          link: 'https://google.com/'
        }
      ]
    };
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      deleteResource:this.removeResource
    };
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'StoredResources' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'AddingResources' ? null : 'flat';
    }
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    addResource(title, description, url) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: url
      };
      this.storedResources.unshift(newResource);
      this.selectedTab = 'StoredResources';
    },
    removeResource(resId)
    {  
      const ResourceIndex=this.storedResources.findIndex(resource=> resource.id===resId);
      this.storedResources.splice(ResourceIndex,1);  // pushing and unshifting
         
        
    }
  }
};
</script>

<style scoped>
/* Add any additional styling for your resources component here */
</style>
