Package.describe({
	summary: "Creates 3D parallax effects using mouse cursor or device orientation."
});

Package.on_use(function (api, where) {
  api.use('jquery', 'client');
  api.add_files('jquery.parallax.js', 'client');
});

