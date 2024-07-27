<template>
<div>
<error-dialog v-if="inputIsInvalid"   title=" invalidInput ">
  <template v-slot:default>
    <p>One input value is invalid</p>
    <p>Please check all input</p>
  </template>
  <template v-slot:actions>
     <base-button @click="confirmError">okay</base-button>
  </template>
</error-dialog>
 <base-card>
   <form action="" @submit.prevent="submitData">
       <div class="form-contact">
          <label for="title">Title</label>
           <input type="text" id="title" label="title" ref="titleIn">
       </div>
       <div class="form-contact">
          <label for="description">Description</label>
          <textarea name="" id="description" cols="30" rows="5" ref="descIn"></textarea>
       </div>
       <div class="form-contact">
          <label for="link">Url-link</label>
          <input type="url" id="link" label="link" ref="urlIn">
       </div>
       <div id="lastButton">
           <base-button type="submit">Add Resource</base-button>
       </div>
   </form>
   </base-card>
   </div>
</template>


<script>
export default {

    inject:['addResource'],

    data(){
      return{
        inputIsInvalid:false,

      }
    },

    
    methods:{
        submitData(){

            const enteredTitle=this.$refs.titleIn.value;
            const enteredDescription=this.$refs.descIn.value;
            const enteredLink=this.$refs.urlIn.value;


            if(enteredTitle.trim()===''|| enteredDescription.trim()==='' || enteredLink.trim()===''){

              
                return this.inputIsInvalid=true ;
            }
            else
            {
                return   this.addResource(enteredTitle,enteredDescription,enteredLink);
            }
        },
        confirmError(){
          this.inputIsInvalid=false;
        }
    }
}
</script>


<style scoped>

label {
    margin: 20px 0px 0px 0px;
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.5rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
#lastButton{
    margin: 20px 0px 0px 0px;

}
</style>