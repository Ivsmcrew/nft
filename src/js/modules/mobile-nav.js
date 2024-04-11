function mobileNav() {
  const html = document.documentElement;
  const body = document.body;
	const button = document.querySelector('.side-button');
  const sidebar = document.querySelector('.sidebar');
  const backlayer = document.querySelector('.sidebar__backlayer');

  function sidebarToggle() {
    button.classList.toggle('side-button_active');
		body.classList.toggle('no-scroll');
		html.classList.toggle('no-scroll');
    sidebar.classList.toggle('sidebar_active');
    backlayer.classList.toggle('sidebar__backlayer_active');
  }

	button.onclick = function () {
    sidebarToggle()
	};

  backlayer.onclick = function() {
    sidebarToggle()
  }
}

export default mobileNav;