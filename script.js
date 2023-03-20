//your code here

function swapTheme() {
			const app = document.getElementById('app');
			const swap = document.getElementById('swap');
			if (app.classList.contains('day')) {
				app.classList.remove('day');
				app.classList.add('night');
				swap.classList.remove('button_day');
				swap.classList.add('button_night');
				swap.innerHTML = 'Light Theme';
			} else {
				app.classList.remove('night');
				app.classList.add('day');
				swap.classList.remove('button_night');
				swap.classList.add('button_day');
				swap.innerHTML = 'Dark Theme';
			}
		}