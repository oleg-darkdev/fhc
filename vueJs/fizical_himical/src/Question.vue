<template>
	<div>
		<h2> Введите пожалйста имена для элементов начиная с простых элементов! </h2>
		<table>
			<tr>
				<!-- <td> <input type="" name="" v-model="elFour.dH"></td> -->
				<td> <input type="" name="" v-model="nameElements.one" placeholder="пример: Ca"></td>
				<td> <input type="" name="" v-model="nameElements.two" placeholder="пример: Si"></td>
				<td> <input type="" name="" v-model="nameElements.three" placeholder="пример: CaSio3"></td>
				<td> <input type="" name="" v-model="nameElements.four" placeholder="пример: ClBr4"></td>
			</tr>
		</table>

<!-- 	<p>{{ nameElements }} </p> -->
	</div>

</template>

<script > 
export default {
  data: function () {
    return {
    	nameElements : {one : '' , two : '' , three : '' , four : ''}
    }
  }
} 
</script>


<style scoped >
	div {
			background-color : pink ; 
			padding: 60px;
 	}
</style>