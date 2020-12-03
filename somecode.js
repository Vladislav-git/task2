//№1

const arr = [2, 3, 5, 7, 11, 13, 17, 19];
const currentSums = (arr) => arr.reduce(
	(accumulator, currentValue, index, array) => 
		[...accumulator,(accumulator[accumulator.length-1] || 0) + currentValue],
	[]
);

console.log(currentSums(arr));

//№2

const firstLetters = (string) => {
	let arr = string.split('');
	let res = arr.filter((symbol, index) => {
		if(!/[а-яёa-z]/i.test(symbol)) return false;
		if(arr[index - 1] === ' ' || !/[а-яёa-z]/i.test(arr[index - 1]) || arr[index - 1] === undefined) return symbol;
	});
	return res;
};

console.log(firstLetters("a  ,  ,,  abc, gfdhh gfhyg  ,  ,,  a"));

//№3

const changeArray = (arr) => {
	if (arr.length % 2 == 0){
		const firstHalfArr = arr.slice(0, arr.length/2);
		const secondHalfArr = arr.slice(arr.length/2, arr.length);
		return secondHalfArr.concat(firstHalfArr);
	}else {
		const middleElement = [arr[(arr.length-1)/2]];
		const firstHalfArr = arr.slice(0, (arr.length-1)/2);
		const secondHalfArr = arr.slice(((arr.length-1)/2) + 1, arr.length);
		return secondHalfArr.concat(middleElement).concat(firstHalfArr);
	};
};

console.log(changeArray([ 1, 2, 3, 4, 5 ]));

//№4

class HashStorage {
	addValue(key,value) {
		return this[key] = value;
	};
	getValue(key) {
		return this[key];
	};
	deleteValue(key) {
		return delete this[key];
	};
	getKeys() {
		let arr = [];
		for (let key in this) {
			arr.push(key);
		};
		return arr;
	};
};

const coctailsStorage = new HashStorage();

coctailsStorage.addValue('somecoctail',{'alcoholic':'yes',
										'ingredients':'some ingredients',
										'recipe':'some recipe',});
coctailsStorage.addValue('a coctail',{'alcoholic':'no',
										'ingredients':'a ingredients',
										'recipe':'a recipe',});
coctailsStorage.addValue('b coctail',{'alcoholic':'no',
										'ingredients':'b ingredients',
										'recipe':'b recipe',});
coctailsStorage.addValue('c coctail',{'alcoholic':'yes',
										'ingredients':'c ingredients',
										'recipe':'c recipe',});
coctailsStorage.addValue('e coctail',{'alcoholic':'no',
										'ingredients':'e ingredients',
										'recipe':'e recipe',});


const buttonEnter = document.querySelector('#enter');
const buttonRecipe = document.querySelector('#recipe');
const buttonDelete = document.querySelector('#delete');
const buttonAll = document.querySelector('#all');
const infoView = document.querySelector('#info')



buttonEnter.addEventListener('click', (event) => {
	const enterName = prompt('Coctail name');
	const enterAlco = prompt('Alcoholic:');
	const enterIngredients = prompt('Ingredients:');
	const enterRecipe = prompt('Recipe:');
	coctailsStorage.addValue(enterName, {'alcoholic':enterAlco,
										'ingredients':enterIngredients,
										'recipe':enterRecipe});
});


buttonRecipe.addEventListener('click', (event) => {
	const recipeCoctail = prompt('Coctail?');
	if (!coctailsStorage.getValue(recipeCoctail)){
		alert('try again');
	}else{
		infoView.innerHTML = `
		<p>Coctail: ${recipeCoctail} (Alcoholic: ${coctailsStorage.getValue(recipeCoctail)['alcoholic']})</p>
		<p>Ingredients: </p>
		<p>${coctailsStorage.getValue(recipeCoctail)['ingredients']}</p>
		<p>Recipe: </p>
		<p>${coctailsStorage.getValue(recipeCoctail)['recipe']}</p>
		`
	};
});


buttonDelete.addEventListener('click', (event) => {
	const deleteCoctail = prompt('Coctail?');
	const deleteStatus = coctailsStorage.deleteValue(deleteCoctail);
	if(deleteStatus){
		alert(`coctail ${deleteCoctail} deleted sucessfully`);
	}else {
		alert(`error try again`);
	};
});



buttonAll.addEventListener('click', (event) => {
	infoView.innerHTML = `
	<p>${coctailsStorage.getKeys()}</p>
	`
});



//some test

// const somefunc = (arr) => 
// 	arr.reduce((accumulator, currentValue, index, array) => {
// 		let a = 'num'+ (index + 1);
// 		let b = 'num'+ index;
// 		// console.log(accumulator,accumulator[currentValue]);
// 		return ({...accumulator, [a] : (accumulator[b] || 0) + currentValue})
// 		},
// 		{}
// 	);

// console.log(somefunc([1,2,3,4]));


