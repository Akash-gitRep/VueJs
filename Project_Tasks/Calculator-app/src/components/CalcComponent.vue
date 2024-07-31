<template>
  <div class="col-md-4 m-5">
    <table class="table table-bordered black">
      <tbody>
        <tr>
          <td class="output" colspan="4">
            {{ output || 0 }}
          </td>
        </tr>
        <tr>
          <td class="operationValue" colspan="2">{{ operationValue }}</td>
          <td colspan="2" @click="oneByOne"><i class="fa-solid fa-backward"></i></td>
        </tr>
        <tr>
          <td @click="clearField">C</td>
          <td @click="setNegativeOrPositive">+/-</td>
          <td @click="percentage">%</td>
          <td @click="processOutput('divide')" class="lastColumn"><i class="fa-solid fa-divide"></i></td>
        </tr>
        <tr>
          <td @click="getNumber('7')">7</td>
          <td @click="getNumber('8')">8</td>
          <td @click="getNumber('9')">9</td>
          <td @click="processOutput('multiply')" class="lastColumn"><i class="fa-solid fa-xmark"></i></td>
        </tr>
        <tr>
          <td @click="getNumber('4')">4</td>
          <td @click="getNumber('5')">5</td>
          <td @click="getNumber('6')">6</td>
          <td @click="processOutput('subtract')" class="lastColumn"><i class="fa-solid fa-minus"></i></td>
        </tr>
        <tr>
          <td @click="getNumber('1')">1</td>
          <td @click="getNumber('2')">2</td>
          <td @click="getNumber('3')">3</td>
          <td @click="processOutput('add')" class="lastColumn"><i class="fa-solid fa-plus"></i></td>
        </tr>
        <tr>
          <td @click="getNumber('0')" colspan="2">0</td>
          <td @click="dot">.</td>
          <td @click="updateOutput" class="lastColumn"><i class="fa-solid fa-equals"></i></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
export default {
  data() {
    return {
      output: '',
      operationValue:'',
      previousValue: null,
      operationClick: false,
    };
  },
  methods: {
    clearField() {
      this.output = '';
      this.operationValue = '';
      this.previousValue = null;
    },
    setNegativeOrPositive() {
      
      this.output = this.output[0] === '' ? this.output.slice(1) : `-${this.output}`;
    },
    percentage() {
      this.output = parseFloat(this.output) / 100;
      this.operationValue=parseFloat(this.operationValue)/100;

      console.log(this.operationValue)
    },
    getNumber(num) {
      if (this.operationClick) {
        this.output = '';
          
        this.operationClick = false;
      }
      this.operationValue=`${this.output}${num}`
      this.output = `${this.output}${num}`;

       console.log(this.operationValue)
      
    },
    dot() {
      if (!this.output.includes('.')) {
        this.output = `${this.output}.`;
        this.operationValue=`${this.output}`

      }
    },
    processOutput(operation) {
      this.previousValue = this.output;
     
      this.operationClick = true;

      switch (operation) {
        case 'add':
          this.operationValue = this.operationValue + ' +';
          this.operation = (a, b) => parseFloat(a) + parseFloat(b);
          break;
        case 'subtract':
          this.operationValue =this.operationValue  +' -';
          this.operation = (a, b) => parseFloat(a) - parseFloat(b);
          break;
        case 'divide':
          this.operationValue =this.operationValue  +' /';
          this.operation = (a, b) => parseFloat(a) / parseFloat(b);
          break;
        case 'multiply':
          this.operationValue =this.operationValue  +' *';
          this.operation = (a, b) => parseFloat(a) * parseFloat(b);
          
          break;

        default:
          break;
      }
    },
    updateOutput() {
      if (this.previousValue !== '' && this.operationValue !== '') {
        
        this.operationValue=`${this.operation(this.previousValue,this.output)}`;
        this.output = `${this.operation(this.previousValue, this.output)}`;
        
        
      }
    },
    oneByOne() {
      if (this.output !== '' && this.operationValue!=='') {
        this.output = Math.floor(this.output / 10).toString();
        this.operationValue=Math.floor(this.operationValue/10).toString();
      }
    },
  },
};
</script>


<style scoped>
.output {
  background-color: rgba(0, 0, 0, 0.659);
  color: rgb(255, 255, 255);
  text-align: right;

}
.lastColumn {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255); 
}
.operationValue{
  background-color: rgba(0, 0, 0, 0.659);
  color: rgb(255, 255, 255);
}
</style>
