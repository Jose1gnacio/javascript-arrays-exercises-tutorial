let tasks = [
	{ label: 'Eat my lunch', done: true },
	{ label: 'Make the bed', done: false },
	{ label: 'Have some fun', done: false },
	{ label: 'Finish the replits', done: false },
	{ label: 'Replit the finishes', done: true },
	{ label: 'Ask for a raise', done: false },
	{ label: 'Read a book', done: true },
	{ label: 'Make a trip', done: false }
];

//your code here

function good(arr) {
	
	let newArray = arr.filter((tarea)=>{
		if (tarea.done == true) {
			return tarea
		}
	});
	return newArray;
};
console.log(good(tasks));

