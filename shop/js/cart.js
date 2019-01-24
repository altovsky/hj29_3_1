'use strict';

function update() {

	if (event.target.dataset.title) {
	  addToCart(event.target.dataset);
  }
}

list.addEventListener('click', update);
