function Post(id, createdAt, city, hotelName, phone, date, days, personName, nickname) {
	this.id = id;
	this.createdAt = createdAt;
	this.city = city;
	this.hotelName = hotelName;
	this.phone = phone;
	this.date = date;
	this.days = days;
	this.personName = personName;
	this.nickname = nickname;
}
validatePost = function() {
	if (this.id != undefined && this.hotelName != undefined && this.phone != undefined && this.date != undefined && this.days != undefined && this.personName != undefined) {
		return true;
	}
	return false;
}


class Posts {
	constructor() {
		this.postArray = new Array();
	}


	addPost(posttmp) {
		this.postArray.push(posttmp);
	}

	getPostID(id) {
		for (let i in this.postArray) {
			if (this.postArray[i].id == id) {
				return i;
			}
		}
	}

	sort_by_city() {
		for (let i = 0; i < this.postArray.length - 1; i++) {
			for (let j = i + 1; j < this.postArray.length; j++) {
				if (this.postArray[i].city > this.postArray[j].city) {
					let tmp = this.postArray[i];
					this.postArray[i] = this.postArray[j];
					this.postArray[j] = tmp;
				}
			}
		}
	}

	sort_by_nickname() {
		for (let i = 0; i < this.postArray.length - 1; i++) {
			for (let j = i + 1; j < this.postArray.length; j++) {
				if (this.postArray[i].nickname > this.postArray[j].nickname) {
					let tmp = this.postArray[i];
					this.postArray[i] = this.postArray[j];
					this.postArray[j] = tmp;
				}
			}
		}
	}

	showPosts(skip, top) {
		if (skip > this.postArray.length) {
			return false;
		}
		if (skip + top > this.postArray.length) {
			for (let i = skip; i < this.postArray.length; i++) {
				let x = document.createElement('div');
				x.className = "post";
				x.innerHTML = "<div class=\"post-left\"><div><div>Name: " + this.postArray[i].personName + 
			"</div>Hotel name: " + this.postArray[i].hotelName + "</div><div>City: " + this.postArray[i].city + 
			"</div><div>Phone number: " + this.postArray[i].phone + "<div><div>When: " + this.postArray[i].date.getDate() + "." + 
			this.postArray[i].date.getMonth() + "." + this.postArray[i].date.getFullYear() + "</div>How many days: " + this.postArray[i].days + 
			"</div></div></div><div class=\"post-right\"><div class=\"name\">" + this.postArray[i].nickname + "</div><div class=\"time\">" + 
			this.postArray[i].createdAt.getHours() + ":" + this.postArray[i].createdAt.getMinutes() + " " + this.postArray[i].createdAt.getDate() + 
			"." + this.postArray[i].createdAt.getMonth() + "." + this.postArray[i].createdAt.getFullYear() + 
			"</div><div class=\"post-icons\"><a href=\"\"><img src=\"images/like.png\" class=\"like\" title=\"Like post\"></a></div></div>";
				document.body.getElementsByClassName('center')[0].append(x)
			}
		} else {
			for (let i = skip; i < skip + top; i++) {
				let x = document.createElement('div');
				x.className = "post";
				x.innerHTML = "<div class=\"post-left\"><div><div>Name: " + this.postArray[i].personName + 
				"</div>Hotel name: " + this.postArray[i].hotelName + "</div><div>City: " + this.postArray[i].city + 
				"</div><div>Phone number: " + this.postArray[i].phone + "<div><div>When: " + this.postArray[i].date.getDate() + "." + 
				this.postArray[i].date.getMonth() + "." + this.postArray[i].date.getFullYear() + "</div>How many days: " + this.postArray[i].days + 
				"</div></div></div><div class=\"post-right\"><div class=\"name\">" + this.postArray[i].nickname + "</div><div class=\"time\">" + 
				this.postArray[i].createdAt.getHours() + ":" + this.postArray[i].createdAt.getMinutes() + " " + this.postArray[i].createdAt.getDate() + 
				"." + this.postArray[i].createdAt.getMonth() + "." + this.postArray[i].createdAt.getFullYear() + 
				"</div><div class=\"post-icons\"><a href=\"\"><img src=\"images/like.png\" class=\"like\" title=\"Like post\"></a></div></div>";
				document.body.getElementsByClassName('center')[0].append(x)
			}
		}
	}
}


data = new Posts();
data.addPost(new Post('1', new Date("December 14, 1975 12:10:00"), "a", "Belarus",
	"375297770064", new Date("December 25, 2002"), 5, "Polichenkov Maxim", "nickname20"));
data.addPost(new Post('2', new Date("December 14, 1975 12:15:00"), "b", "Menesk",
	"375297770064", new Date("December 25, 2002"), 5, "Random Guy", "nickname8"));
data.addPost(new Post('3', new Date("December 14, 1975 12:15:00"), "c", "Menesk",
	"375297770064", new Date("December 25, 2002"), 5, "Random Guy", "nickname9"));
data.addPost(new Post('4', new Date("December 14, 1975 12:15:00"), "d", "Menesk",
	"375297770064", new Date("December 25, 2002"), 5, "Random Guy", "nickname10"));
data.addPost(new Post('5', new Date("December 14, 1975 12:15:00"), "e", "Menesk",
	"375297770064", new Date("December 25, 2002"), 5, "Random Guy", "nickname11"));
data.addPost(new Post('6', new Date("December 14, 1975 12:15:00"), "f", "Menesk",
	"375297770064", new Date("December 25, 2002"), 5, "Random Guy", "nickname14"));
data.addPost(new Post('7', new Date("December 14, 1975 12:15:00"), "g", "Menesk",
	"375297770064", new Date("December 25, 2002"), 5, "Random Guy", "nickname15"));
data.addPost(new Post('8', new Date("December 14, 1975 12:15:00"), "h", "Menesk",
	"375297770064", new Date("December 25, 2002"), 5, "Random Guy", "nickname18"));
data.addPost(new Post('9', new Date("December 14, 1975 12:15:00"), "i", "Menesk",
	"375297770064", new Date("December 25, 2002"), 5, "Random Guy", "nickname19"));
data.addPost(new Post('10', new Date("December 14, 1975 12:15:00"), "j", "Menesk",
	"375297770064", new Date("December 25, 2002"), 5, "Random Guy", "nickname17"));
data.addPost(new Post('11', new Date("December 14, 1975 12:15:00"), "k", "Menesk",
	"375297770064", new Date("December 25, 2002"), 5, "Random Guy", "nickname16"));
data.addPost(new Post('12', new Date("December 14, 1975 12:15:00"), "l", "Menesk",
	"375297770064", new Date("December 25, 2002"), 5, "Random Guy", "nickname13"));
data.addPost(new Post('13', new Date("December 14, 1975 12:15:00"), "m", "Menesk",
	"375297770064", new Date("December 25, 2002"), 5, "Random Guy", "nickname12"));
data.addPost(new Post('14', new Date("December 14, 1975 12:15:00"), "n", "Menesk",
	"375297770064", new Date("December 25, 2002"), 5, "Random Guy", "nickname7"));
data.addPost(new Post('15', new Date("December 14, 1975 12:15:00"), "o", "Menesk",
	"375297770064", new Date("December 25, 2002"), 5, "Random Guy", "nickname6"));
data.addPost(new Post('16', new Date("December 14, 1975 12:15:00"), "p", "Menesk",
	"375297770064", new Date("December 25, 2002"), 5, "Random Guy", "nickname5"));
data.addPost(new Post('17', new Date("December 14, 1975 12:15:00"), "q", "Menesk",
	"375297770064", new Date("December 25, 2002"), 5, "Random Guy", "nickname4"));
data.addPost(new Post('18', new Date("December 14, 1975 12:15:00"), "r", "Menesk",
	"375297770064", new Date("December 25, 2002"), 5, "Random Guy", "nickname3"));
data.addPost(new Post('19', new Date("December 14, 1975 12:15:00"), "s", "Menesk",
	"375297770064", new Date("December 25, 2002"), 5, "Random Guy", "nickname2"));
data.addPost(new Post('20', new Date("December 14, 1975 12:15:00"), "t", "Menesk",
	"375297770064", new Date("December 25, 2002"), 5, "Random Guy", "nickname1"));

function addPost(post) {
	data.addPost(post);
	data.sort_by_city();
	let n = data.postArray.length;
	for (let i = 0; i < n - 1; i++) {
		(document.body.getElementsByClassName('post')[0]).parentNode.removeChild(document.body.getElementsByClassName('post')[0]);
	}
	data.showPosts(0, n);
}

function removePost(id) {
	// -------------------------------- удаление!
	let n = data.postArray.length;
	data.sort_by_city();
	for (let i = 0; i < n - 1; i++) {
		(document.body.getElementsByClassName('post')[0]).parentNode.removeChild(document.body.getElementsByClassName('post')[0]);
	}
	data.showPosts(0, n - 2);
}

function editPost(id, city, hotelName, phone, date, days, personName, nickname) {
	let ind = data.getPostID(id);
	data.postArray[ind].city = city;
	data.postArray[ind].hotelName = hotelName;
	data.postArray[ind].phone = phone;
	data.postArray[ind].date = date;
	data.postArray[ind].days = days;
	data.postArray[ind].personName = personName;
	data.postArray[ind].nickname = nickname;
	data.sort_by_city();
	let n = data.postArray.length;
	for (let i = 0; i < n - 1; i++) {
		(document.body.getElementsByClassName('post')[0]).parentNode.removeChild(document.body.getElementsByClassName('post')[0]);
	}
	data.showPosts(0,data.postArray.length);
}

data.sort_by_city();
data.showPosts(0,data.postArray.length);
