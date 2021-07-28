/*Сверстайте кнопку, которая будет содержать 
в себе icon_01 (как в примере в последнем видео). 
При клике на кнопку иконка должна меняться на icon_02. 
Повторный клик меняет иконку обратно. */
const btn = document.querySelector(".btn");
const svgCircle = document.querySelector(".bi-arrow-down-left-circle");
const svgCircleFill = document.querySelector(".bi-arrow-down-left-circle-fill");

btn.addEventListener('click', () => {
	if ((svgCircleFill.style.display == 'none') && (svgCircle.style.display == 'block')) {
		console.log('1');
		svgCircle.style.display = 'none';
		svgCircleFill.style.display = 'block';
	} else {
		console.log('2');
		svgCircle.style.display = 'block';
		svgCircleFill.style.display = 'none';
	}
});