export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]
		setInterval(() => {
			showAlert("Hi")
		}, 2500, "Int")
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
		clearInterval("Int")
	}
}