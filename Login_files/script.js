var url1 = window.location.protocol + "//" + window.location.host
		+ window.contextPath + "/" + "master1";

var pageContext_url = window.location.protocol + "//" + window.location.host
		+ window.contextPath + "/";

var url2 = window.location.protocol + "//" + window.location.host
		+ window.contextPath + "/" + "getFevoriteMenuLinkForUser";

var url3 = window.location.protocol + "//" + window.location.host
		+ window.contextPath + "/" + "getIsMenuMarkedAsFavourite";

var menuStatus;
var showFavouriteMenuList;
var menuText1 = "";
var fevoriteMenu = "";

$(document).ready(function() {

	$("#pageContext-url").val(pageContext_url);

	// jQuery window resize call/event
	if ($("#alertable").val() == 'true') {
		// alert('working')
	} else {
		window.alert = function() {
			return true;
		}
	}

});

function myRecursiveFunction(index, menuList) {

	var flag = true;

	$.each(menuList, function(index, menu) {

		if (menu.subMenus.length == 0) {
			menuText1 += '<li><a href="' + window.contextPath + '/'
					+ menu.menuUrl + '">' + menu.menuName + '</a></li>';
		} else {
			menuText1 += '<li><a href="#">' + menu.menuName + '</a>';
			menuText1 += '<ul>';
			myRecursiveFunction(index, menu.subMenus)
			menuText1 += '</ul></li>';
		}
	});
}

function userLogout() {
	document.getElementById("logoutForm").submit();
}

function showDialog(message) {
	$("#popup-message").html(message);
	$("#myModal").modal('show');
}

var elapsedTime = 0;
function notifysuccess(message) {

	if (elapsedTime != 0) {
		return false;
	}
	elapsedTime = 3000;
	setTimeout(function() {
		elapsedTime = 0;
	}, 3000)

	noty({
		text : message,
		layout : 'center',
		type : 'success',
		modal : true,
		theme : 'defaultTheme',
		animation : {
			open : 'animated fadeIn', // Animate.css class names
			close : 'animated fadeOut',// Animate.css class names
			easing : 'swing',
			speed : 500,
		},
		timeout : 2000,
	});

}

function notifyupdate(message) {

	if (elapsedTime != 0) {
		return false;
	}
	elapsedTime = 3000;
	setTimeout(function() {
		elapsedTime = 0;
	}, 3000)

	noty({

		text : message,
		layout : 'center',
		type : 'warning',
		modal : true,
		theme : 'defaultTheme',
		animation : {
			open : 'animated fadeIn', // Animate.css class names
			close : 'animated fadeOut',// Animate.css class names
			easing : 'swing',
			speed : 500,
		},
		timeout : 2000,
	});

}

function notifycopy(message) {

	noty({
		text : message,
		layout : 'center',
		type : 'success',
		modal : true,
		animation : {
			open : 'animated fadeIn', // Animate.css class names
			close : 'animated fadeOut',// Animate.css class names
			easing : 'swing',
			speed : 500,
		},
		timeout : 2000,
	});

}

function notifyerror(message, time) {

	if (elapsedTime != 0) {
		return false;
	}
	elapsedTime = 3000;
	setTimeout(function() {
		elapsedTime = 0;
	}, 3000)

	if (time == undefined) {
		time = 2000;
	}
	noty({
		text : message,
		layout : 'center',
		type : 'error',
		modal : true,
		animation : {
			open : 'animated fadeIn', // Animate.css class names
			close : 'animated fadeOut',// Animate.css class names
			easing : 'swing',
			speed : 500,
		},
		timeout : time,
	});

}

function notifyConfirm(message, element, callbackfunction) {
	notifyConfirmWithCancel(message, element, callbackfunction, "");
}

function notifyConfirmWithCancel(message, element, callbackfunction,
		cancelCallbackfunction) {
	noty({
		text : message,
		type : 'confirm',
		modal : true,
		layout : 'center',
		theme : 'defaultTheme',
		buttons : [
				{
					addClass : 'btn btn-success btn-space',
					text : 'Ok',
					onClick : function($noty) {
						window[callbackfunction](element)
						$noty.close();
					}
				},
				{
					addClass : 'btn btn-danger btn-space',
					text : 'Cancel',
					onClick : function($noty) {
						if (cancelCallbackfunction != undefined
								&& cancelCallbackfunction != "") {
							window[cancelCallbackfunction](element)
						}
						$noty.close();
						// noty({text: 'You clicked "Cancel" button', type:
						// 'error'});
					}
				} ],
		animation : {
			open : 'animated fadeIn', // Animate.css class names
			close : 'animated fadeOut',// Animate.css class names
			easing : 'swing',
			speed : 2000,
		},
		timeout : false,
	});
}
function notifyWithExit(message, element, callbackfunction) {
	noty({
		text : message,
		type : 'confirm',
		modal : true,
		layout : 'center',
		theme : 'defaultTheme',
		buttons : [ {
			addClass : 'btn btn-success btn-space',
			text : 'Exit',
			onClick : function($noty) {
				window[callbackfunction](element)
				$noty.close();
			}
		} ],
		animation : {
			open : 'animated fadeIn', // Animate.css class names
			close : 'animated fadeOut',// Animate.css class names
			easing : 'swing',
			speed : 2000,
		},
		timeout : false,
	});
}

function displayMessage(code) {
	if (code == "add" || code == 1) {
		notifysuccess('Record Saved Successfully!!');
	} else if (code == "update" || code == 2) {
		notifysuccess('Record Updated Successfully!!');
	} else if (code == "delete" || code == 3) {
		notifysuccess('Record Deleted Successfully!!');
	} else if (code == "alreadyexist" || code == 4) {
		notifyerror('Record Already Exists!!');
	} else if (code == "error" || code == 5) {
		notifyerror('Error Occurred While Saving Record!!');
	} else if (code == "alreadyExist" || code == 6) {
		notifyerror('Record Already Exists!!');
	} else if (code == "addError" || code == 7) {
		notifyerror('Error Occurred While Saving Record!!');
	} else if (code == "updateError" || code == 8) {
		notifyerror('Error Occurred While Updating Record!!');
	} else if (code == "uploadError" || code == 9) {
		notifyerror('Error Occurred While Uploading File!!');
	} else if (code == "success" || code == 10) {
		notifysuccess('Your Request Has Been Processed Successfully!!');
	} else if (code == "upload" || code == 11) {
		notifysuccess('File Uploaded Successfully!!');
	} else if (code == "reportError" || code == 12) {
		notifyerror('No Records Available For Report!!');
	} else if (code == "lock" || code == 13) {
		notifysuccess('Entry Locked Successfully!!');
	} else if (code == "unlock" || code == 14) {
		notifysuccess('Entry Unlocked Successfully!!');
	} else if (code == "lockUnlockError" || code == 15) {
		notifyerror('Error Occured While Locking/Unlocking Entry!!');
	} else if (code == "sessionClearedError" || code == 16) {
		notifyerror('Unexpected error, please avoid using more than one tab!!');
	} else if (code == "biodataSubmit" || code == 17) {
		notifysuccess('Bio-data submitted successfully!!');
	} else if (code == "biodataAlreadySubmit" || code == 18) {
		notifyerror('Bio-data already submitted.For modification contact T&P admin !!');
	} else if (code == "noRecords") {
		notifyerror('No Records Available !!');
	} else if (code == "ATTOK") {
		notifysuccess('Attendance Processed Successfully!');
	} else if (code == "ATTFAILURE") {
		notifyerror('Failure In Attendance Processing!!');
	} else if (code == "alreadyinuse" || code == 19) {
		notifysuccess('Existing Record Already Is In Use Can Not Update!!');
	} else if (code == "SeqNoAlreadyExist" || code == 20) {
		notifyerror('Sequence Number Already Exist!!');
	} else if (code == "ATTPERLOCK") {
		notifyerror('ATTENDANCE PROCESS PERMANENTLY LOCK!!');
	} else if (code == "ATTTEMPLOCK") {
		notifyerror('ATTENDANCE PROCESS TEMPORALY LOCK!!');
	} else if (code == "PREVPERLOCK") {
		notifyerror('PREVIOUS MONTH ATTENDANCE PERMANENTLY NOT LOCK!!');
	} else if (code == "PREVATTNOTPROC") {
		notifyerror('PREVIOUS MONTH ATTENDANCE NOT PROCESS!!');
	} else if (code == "employeeServiceBookFunctionality" || code == 21) {
		notifysuccess('This functionality is blocked by Admin For Employee Service Book!!');
	} else if (code == "employeeIdNotFound" || code == 22) {
		notifyerror('Employee Id Not Found!!');
	} else if (code == "balanceLeaveExceed" || code == 23) {
		notifysuccess('Insufficient Balance Leaves!!');
	} else if (code == "attendlockunlock" || code == 24) {
		notifysuccess('CHECK TEMPORARY/PERMANENT LOCK OF ATTENDANCE PROCESSING !!');
	} else if (code == "adminAlreadyAlloted" || code == 25) {
		notifyerror('Admin Already Alloted For the Department !!');
	} else if (code == "illegalattempt" || code == 26) {
		notifyerror('This is Illegal Attempt !!');
	} else if (code == "amountAlreadyPaid" || code == 27) {
		notifyerror('Amount Already Paid!!');
	} else if (code == 'AlreadyLocked' || code == 28) {
		notifyerror('Record is Already locked, It cannot be modified!');
	} else if (code == 'LimitExcess' || code == 29) {
		notifyerror("No. of Lecture Exceed !!");
	} else if (code == 'UnauthorizedAccess' || code == 29) {
		notifyerror("Unauthorized Access !!");
	}else if (code == 'Marks Locked' || code == 30) {
		notifyerror("Marks Already Locked !!");
	}
	else if (code == 'NotificationSendSuccessfully' || code == 31) {
		notifysuccess("Notification Send Successfully !!");
	}
	else if (code == 'DataNotFoundtosendNotification' || code == 32) {
		notifyerror("Data Not Found to send Notification ! Please try again");
	}
	else if (code == 'sendNotificationondate' || code == 33) {
		notifysuccess("Notification send On Selected Date at 8:00 AM ");
	}
	else if(code == 'YouCannotDecreaseRoomSize' || code == 34){
		notifysuccess("You Cannot Decrease The Capacity than Room Fill count !!");
	}
	else if(code == 'RoomNotInUSe' || code == 35){
		notifysuccess("This Room is Not In Use In This Session !!");
	}
	else if(code == 'OnlyAdminCanDo' || code == 36){
		notifysuccess("Only Admin Can Edit this !!");
	}
	else if(code == 'StudentsNotSelected' || code == 37){
		notifysuccess("Please Select Studnets for Un-Publish the Result !!");
	}
	else if(code == 'ResultCancelledSuccessfully' || code == 38){
		notifysuccess("Result successfully Un Published.. !!");
	} else if(code == 39) {
		notifysuccess('Added to favourite list!');
	} else if(code == 40) {
		notifysuccess('Removed from favourite list!');
	} else if(code == 41) {
		notifyerror('Unable to add menu in favourite list!');
	}

	/*
	 * else{ notifyerror(code); }
	 */
}

function ajaxCall(formData, url, method, callbackfunction) {

	$(".loader").show();
	$.ajax({
		/* dataType: "json", */
		url : url,
		type : method,
		data : formData,
		success : function(response) {
			
			if (response == null
					|| (typeof response != "boolean" && response === "")) {
				notifyerror('No Record Found!!');
			}

			/* $(".loader").hide(); */
			window[callbackfunction](JSON.stringify(response));
		},
		error : function() {
			/* $(".loader").hide(); */
			notifyerror("Error Occurred");
		},
		complete : function() {
			$(".loader").hide();
		}
	});

}
function ajaxCallWithoutNoData(formData, url, method, callbackfunction) {

	$(".loader").show();
	$.ajax({
		/* dataType: "json", */
		url : url,
		type : method,
		data : formData,
		success : function(response) {
			
			if (response == null
					|| (typeof response != "boolean" && response == "")) {

			}

			window[callbackfunction](JSON.stringify(response));
		},
		error : function() {
			notifyerror("Error Occurred");
		},
		complete : function() {
			$(".loader").hide();
		}
	});

}

function socialSignoutCallback(response) {
	console.log("looged out from google..")
}

function loadAllFevoriteMenuForUser(index, menuList) {
	$.each(menuList, function(index, menu) {
		fevoriteMenu += '<a class="vertical-menu" href="' + window.contextPath + '/'
				+ menu.menuLink + '">' + menu.menuName + '</a>';
	});
}

function markedMenuAsFavourite(response) {
	menuStatus = response;
}