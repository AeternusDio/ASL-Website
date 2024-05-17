const observer = NewintersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry)
		if (entry.isInterSecting) {
			entry.target.classlict.add('show');
		} else {
			entry.target.classList.remove('show');
		}
	});
});

const hiddenElements = document.querySelectorALL('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
