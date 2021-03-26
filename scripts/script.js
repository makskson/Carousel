function Post(id, createdAt, city, hotelName, phone, date, days, name, nickname) {
	this.id = id;
	this.createdAt = createdAt;
	this.city = city;
	this.hotelName = hotelName;
	this.phone = phone;
	this.date = date;
	this.days = days;
	this.name = name;
	this.nickname = nickname;
}

var Posts = new Array();
Posts.push(new Post('1', new Date("December 14, 1975 12:10:00"), "AAA", "Belarus",
	"375297770064", new Date("December 25, 2002"), 5, "Polichenkov Maxim", "makskson"));
Posts.push(new Post('2', new Date("December 14, 1975 12:15:00"), "BBB", "Menesk",
	"375297770064", new Date("December 25, 2002"), 5, "Random Guy", "aa"));
Posts.push(new Post('3', new Date("December 14, 1975 12:15:00"), "LLL", "Menesk",
	"375297770064", new Date("December 25, 2002"), 5, "Random Guy", "bbb"));
Posts.push(new Post('4', new Date("December 14, 1975 12:15:00"), "KKK", "Menesk",
	"375297770064", new Date("December 25, 2002"), 5, "Random Guy", "c"));
Posts.push(new Post('5', new Date("December 14, 1975 12:15:00"), "MMM", "Menesk",
	"375297770064", new Date("December 25, 2002"), 5, "Random Guy", "d"));
Posts.push(new Post('6', new Date("December 14, 1975 12:15:00"), "FFF", "Menesk",
	"375297770064", new Date("December 25, 2002"), 5, "Random Guy", "e"));
Posts.push(new Post('7', new Date("December 14, 1975 12:15:00"), "GGG", "Menesk",
	"375297770064", new Date("December 25, 2002"), 5, "Random Guy", "f"));
Posts.push(new Post('8', new Date("December 14, 1975 12:15:00"), "HHH", "Menesk",
	"375297770064", new Date("December 25, 2002"), 5, "Random Guy", "g"));
Posts.push(new Post('9', new Date("December 14, 1975 12:15:00"), "III", "Menesk",
	"375297770064", new Date("December 25, 2002"), 5, "Random Guy", "h"));
Posts.push(new Post('10', new Date("December 14, 1975 12:15:00"), "JJJ", "Menesk",
	"375297770064", new Date("December 25, 2002"), 5, "Random Guy", "i"));
Posts.push(new Post('11', new Date("December 14, 1975 12:15:00"), "CCC", "Menesk",
	"375297770064", new Date("December 25, 2002"), 5, "Random Guy", "j"));
Posts.push(new Post('12', new Date("December 14, 1975 12:15:00"), "NNN", "Menesk",
	"375297770064", new Date("December 25, 2002"), 5, "Random Guy", "k"));
Posts.push(new Post('13', new Date("December 14, 1975 12:15:00"), "Minsk", "Menesk",
	"375297770064", new Date("December 25, 2002"), 5, "Random Guy", "l"));
Posts.push(new Post('14', new Date("December 14, 1975 12:15:00"), "Minsk", "Menesk",
	"375297770064", new Date("December 25, 2002"), 5, "Random Guy", "m"));
Posts.push(new Post('15', new Date("December 14, 1975 12:15:00"), "BBB", "Menesk",
	"375297770064", new Date("December 25, 2002"), 5, "Random Guy", "n"));
Posts.push(new Post('16', new Date("December 14, 1975 12:15:00"), "DDD", "Menesk",
	"375297770064", new Date("December 25, 2002"), 5, "Random Guy", "o"));
Posts.push(new Post('17', new Date("December 14, 1975 12:15:00"), "Minsk", "Menesk",
	"375297770064", new Date("December 25, 2002"), 5, "Random Guy", "p"));
Posts.push(new Post('18', new Date("December 14, 1975 12:15:00"), "Minsk", "Menesk",
	"375297770064", new Date("December 25, 2002"), 5, "Random Guy", "q"));
Posts.push(new Post('19', new Date("December 14, 1975 12:15:00"), "Minsk", "Menesk",
	"375297770064", new Date("December 25, 2002"), 5, "Random Guy", "r"));
Posts.push(new Post('20', new Date("December 14, 1975 12:15:00"), "Minsk", "Menesk",
	"375297770064", new Date("December 25, 2002"), 5, "Random Guy", "s"));

Posts.showPosts = function(skip, top) {
	if (skip > Posts.length) {
		return false;
	}
	if (skip + top > Posts.length) {
		for (var i = skip; i < Posts.length; i++) {
		document.write("<div class=\"post\"><div class=\"post-left\"><div><div>Name: " + Posts[i].name + "</div>Hotel name: " + Posts[i].hotelName + "</div><div>City: " + Posts[i].city + "</div><div>Phone number: " + Posts[i].phone + "<div><div>When: " + Posts[i].date.getDate() + "." + Posts[i].date.getMonth() + "." + Posts[i].date.getFullYear() + "</div>How many days: " + Posts[i].days + "</div></div></div><div class=\"post-right\"><div class=\"name\">" + Posts[i].nickname + "</div><div class=\"time\">" + Posts[i].createdAt.getHours() + ":" + Posts[i].createdAt.getMinutes() + " " + Posts[i].createdAt.getDate() + "." + Posts[i].createdAt.getMonth() + "." + Posts[i].createdAt.getFullYear() + "</div><div class=\"hashtags\"><a href=\"\">#hacker</a> <a href=\"\">#thebestprogrammer</a> <a href=\"\">#linkedin</a> <a href=\"\">#ilovecoding</a></div><div class=\"post-icons\"><a href=\"\"><img src=\"images/like.png\" class=\"like\" title=\"Like post\"></a></div></div></div>");
		}
		return true;
	}

	for (var i = skip; i < skip + top; i++) {
		document.write("<div class=\"post\"><div class=\"post-left\"><div><div>Name: " + Posts[i].name + "</div>Hotel name: " + Posts[i].hotelName + "</div><div>City: " + Posts[i].city + "</div><div>Phone number: " + Posts[i].phone + "<div><div>When: " + Posts[i].date.getDate() + "." + Posts[i].date.getMonth() + "." + Posts[i].date.getFullYear() + "</div>How many days: " + Posts[i].days + "</div></div></div><div class=\"post-right\"><div class=\"name\">" + Posts[i].nickname + "</div><div class=\"time\">" + Posts[i].createdAt.getHours() + ":" + Posts[i].createdAt.getMinutes() + " " + Posts[i].createdAt.getDate() + "." + Posts[i].createdAt.getMonth() + "." + Posts[i].createdAt.getFullYear() + "</div><div class=\"hashtags\"><a href=\"\">#hacker</a> <a href=\"\">#thebestprogrammer</a> <a href=\"\">#linkedin</a> <a href=\"\">#ilovecoding</a></div><div class=\"post-icons\"><a href=\"\"><img src=\"images/like.png\" class=\"like\" title=\"Like post\"></a></div></div></div>");
	}

}

Posts.sort_by_name = function() {
	for (var i = 0; i < Posts.length - 1; i++) {
		for (var j = i + 1; j < Posts.length; j++) {
			if (Posts[i].name < Posts[j].name) {
				var tmp = Posts[i];
				Posts[i] = Posts[j];
				Posts[j] = tmp;
			}
		}
	}
}

Posts.sort_by_city = function() {
	for (var i = 0; i < Posts.length - 1; i++) {
		for (var j = i + 1; j < Posts.length; j++) {
			if (Posts[i].city < Posts[j].city) {
				var tmp = Posts[i];
				Posts[i] = Posts[j];
				Posts[j] = tmp;
			}
		}
	}
}

Posts.getPost = function(id) {
	for (var i in Posts) {
		if (Posts[i].id == id) {
			return Posts[i];
		}
	}
}