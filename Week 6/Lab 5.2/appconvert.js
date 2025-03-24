Vue.component('app-convert', {
  template: `
    <div class="converter">
      <h1>Roman Numeral Converter</h1>
      <input type="number" v-model="numVar" placeholder="Enter a number (1-99)" min="1" max="99">
      <p v-if="numVar">Roman Numeral: {{ numVar | num2roman }}</p>
    </div>
  `,
  data: function() {
    return {
      numVar: ''
    };
  },
  filters: {
    num2roman: function(myNum) {
      if (isNaN(myNum) || myNum < 1 || myNum > 99) return 'Invalid input';
      
      const romanMap = [
        [90, 'XC'], [50, 'L'], [40, 'XL'], [10, 'X'],
        [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
      ];

      let roman = '';
      let num = parseInt(myNum, 10);

      romanMap.forEach(([value, numeral]) => {
        while (num >= value) {
          roman += numeral;
          num -= value;
        }
      });

      return roman;
    }
  }
});

new Vue({
  el: '#app'
});
