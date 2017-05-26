var bio = {
	"name": "Jeff Temple",
	"role": "Front-End Web Developer",
	"contact": {
		"mobile": "317-555-5555",
		"email": "jlptemple95@gmail.com",
		"github": "jethro2438",
		"twitter": "jefftemple95",
		"location": "Indianapolis, IN"
	},
	"biopic": "images/Portfolio_Image_BW.jpg",
	"welcomeMessage": "Welcome to my site",
	"skills": ["HTML", "CSS", "Javascript", "Oracle", "Quantum", "Data Entry",
"Purchasing", "Microsoft Word", "Microsoft Excel"]
};

var work = {
	"jobs": [
	{
		"employer": "Aerorepair Corporation",
		"title": "Parts Tech, Data Entry, Purchasing",
		"location": "Indianapolis, IN",
		"dates": "2016-present",
		"description": "Create purchase orders in Quantum. Manipulate data in Quantum to keep inventory accurate."
	},
	{
		"employer": "Tempko Software",
		"title": "Owner",
		"location": "Indianapolis, IN",
		"dates": "2016-present",
		"description": "Repair Smart Devices and Computers."
	},
	{
		"employer": "Telamon Corporation",
		"title": "Receiving Clerk",
		"location": "Indianapolis, IN",
		"dates": "2015-2016",
		"description": "Received products into Oracle. Put products away with bendi forklift."
	},
	{
		"employer": "Thornton Industries",
		"title": "Shipping and Receiving Clerk",
		"location": "Albion, PA",
		"dates": "2008-2015",
		"description": "Loaded and unloaded trucks with forklift and overhead crain. Disassembled forging bolsters."
	},
	{
		"employer": "CW Ohio",
		"title": "Shipping and Receiving Clerk",
		"location": "Conneaut, OH",
		"dates": "1999-2008",
		"description": "Loaded and unloaded trucks with forklift. Created BOL's for truck loads."
	}
	]
};

var projects = {
	"projects": [
	{
		"title": "Tempko Flying Baseball",
		"dates": "2014",
		"description": "Designed and created an Apple/Android game.",
		"images": ['images/tempko.jpg']
	},
	{
		"title": "Udacity Website",
		"dates": "2017",
		"description": "Website for Udacity Nanodegree.",
		"images": ['images/paradise.jpg']
	},
	{
		"title": "Udacity Movie Website",
		"dates": "2017",
		"description": "Movie website for Udacity Nanodegree.",
		"images": ['images/movie.jpg']
	}
	]
};

var education = {
	"schools": [
	{
		"name": "Conneaut High School",
		"location": "Conneaut, OH",
		"degree": "High School Diploma",
		"majors": ["General Studies"],
		"years": "1998",
		"url": "www.cacsk12.org"
	},

	{
		"name": "Erie Business Center",
		"location": "Erie, PA",
		"degree": "1 year completed",
		"majors": ["Computer Science"],
		"years": "2001",
		"url": "www.ebc.com"
	}],

	"onlineCourses": [
	{
		"title": "Intro to Programming Nanodegree",
		"school": "Udacity",
		"date": "2017",
		"url": "www.udacity.com"
	}
	]
};


bio.display = function() {
	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));

	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

	$("#topContacts").append(HTMLmobile.replace("%data%", bio.contact.mobile));

	$("#topContacts").append(HTMLemail.replace("%data%", bio.contact.email));

	$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contact.twitter));

	$("#topContacts").append(HTMLgithub.replace("%data%", bio.contact.github));

	$("#topContacts").append(HTMLlocation.replace("%data%", bio.contact.location));

	$("#header").append(HTMLbioPic.replace("%data%", bio.biopic));

	if (bio.skills.length > 0) {
		$('#header').append(HTMLskillsStart);

		for (i = 0; i < bio.skills.length; i++)
		{
			var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
			$('#skills').append(formattedSkill);
		}
/* 		formattedSkill = HTMLskills.replace('%data%', bio.skills[1]);
		$('#skills').append(formattedSkill);
		formattedSkill = HTMLskills.replace('%data%', bio.skills[2]);
		$('#skills').append(formattedSkill); */
	}

	$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contact.mobile));

	$("#footerContacts").append(HTMLemail.replace("%data%", bio.contact.email));

	$("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contact.twitter));

	$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contact.github));

	$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contact.location));
};

work.display = function() {
	for (i = 0; i < work.jobs.length; i++) {
		$('#workExperience').append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
		$(".work-entry:last").append(formattedDescription);

	}
};

projects.display = function() {
	for (i = 0; i < projects.projects.length; i++) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[i].images.length > 0) {
			for (j = 0; j < projects.projects[i].images.length; j++) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

education.display = function() {

	$("#education").append(HTMLschoolStart);
	for (i = 0; i < education.schools.length; i++) {

		$(".education-entry").append(HTMLschoolName.replace("%data%", education.schools[i].name));
		$(".education-entry").append(HTMLschoolDegree.replace("%data%", education.schools[i].degree));
		$(".education-entry").append(HTMLschoolDates.replace("%data%", education.schools[i].years));
		$(".education-entry").append(HTMLschoolLocation.replace("%data%", education.schools[i].location));
		$(".education-entry").append(HTMLschoolMajor.replace("%data%", education.schools[i].majors));
	}

	$(".education-entry").append(HTMLonlineClasses);

	for (i = 0; i < education.onlineCourses.length; i++) {
		$(".education-entry").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title));
		$(".education-entry").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school));
		$(".education-entry").append(HTMLonlineDates.replace("%data%", education.onlineCourses[i].date));
		$(".education-entry").append(HTMLonlineURL.replace("%data%", education.onlineCourses[i].url));
	}
};

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);
