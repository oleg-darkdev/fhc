<template>
<div>
			<!-- 				
								one element
			 -->
			<tr>
			<td> <input type="" name="" v-model="elements.elOne.dH"></td>
			<td> <input type="" name="" v-model="elements.elOne.S"></td>
			<td> <input type="" name="" v-model="elements.elOne.a"></td>
			<td> <input type="" name="" v-model="elements.elOne.b"></td>
			<td> <input type="" name="" v-model="elements.elOne.c"></td>
			</tr>

			<!-- 				
								two element
			 -->

			<tr>
			<td> <input type="" name="" v-model="elements.elTwo.dH"></td>
			<td> <input type="" name="" v-model="elements.elTwo.S"></td>
			<td> <input type="" name="" v-model="elements.elTwo.a"></td>
			<td> <input type="" name="" v-model="elements.elTwo.b"></td>
			<td> <input type="" name="" v-model="elements.elTwo.c"></td>
			</tr>
			<!-- 				
								Three element
			 -->

			<tr>
			<td> <input type="" name="" v-model="elements.elThree.dH"></td>
			<td> <input type="" name="" v-model="elements.elThree.S"></td>
			<td> <input type="" name="" v-model="elements.elThree.a"></td>
			<td> <input type="" name="" v-model="elements.elThree.b"></td>
			<td> <input type="" name="" v-model="elements.elThree.c"></td>

			</tr> 

			<!-- 
							
								end element
			 -->

			<tr>
			<td> <input type="" name="" v-model="elements.elFour.dH"></td>
			<td> <input type="" name="" v-model="elements.elFour.S"></td>
			<td> <input type="" name="" v-model="elements.elFour.a"></td>
			<td> <input type="" name="" v-model="elements.elFour.b"></td>
			<td> <input type="" name="" v-model="elements.elFour.c"></td>
			</tr>
			
			

		</table> 	
			<button v-on:click="sendData"> Go!!</button>
			<!-- 	<div>

						
				</div> -->

		<table > 	
 <!-- <p>{{ elOne.dH}} </p> -->

</div>

<!-- <p>{{ str}} </p> -->

			
<!-- <p>{{elOne.dH}} </p>
<p>{{elTwo.dH}} </p> -->

<!-- <td> <input type="" name="" v-model="elOne.dH"></td>
 -->


<!-- </div> -->
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return { 
		elements : {
				elOne : {
					dH:"",
					S:"",
					a:"",
					b:"",
					c:""
				},
				elTwo : {
					dH:"",
					S:"",
					a:"",
					b:"",
					c:""
				},
				elThree : {
					dH:"",
					S:"",
					a:"",
					b:"",
					c:""
				},
				elFour : {
					dH:"",
					S:"",
					a:"",
					b:"",
					c:""
				}
		  }	
    }
  },
    methods: {
		sendData: function () {

		const str = JSON.stringify(this.elements);
		// console.log(str )
		axios.post('http://localhost:8081/', str)
		  .then((response) => {
		    console.log(response);
		  })
		  .catch((error) => {
		    console.log(error);
		  });
        }
    }
}


 //  methods : {
	//   gotable: function (func) {
	//   this.$http.post('http://localhost:8081', this.datatable).then((response) => {
	//       console.log(response.data);
	//   });
	// }


 //  methods :  { 
 //  	// отправка на сервер,перевод в json,валидация
	//   sendData: function ( ) {
	// // var str = JSON.stringify(elements); 
	// // console.log(str);
	// 	}	
	// }
 


</script>


<style>
	


</style>