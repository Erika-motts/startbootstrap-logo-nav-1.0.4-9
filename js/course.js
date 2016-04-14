


var Course = Parse.Object.extend("Course");
var course = new Course();

course.set(coursename, document.getElementById("inputSection").value);
course.set(crn,0);
course.set(sectionname,"");
course.set(courseday,[false, false, false, false, false]);

course.save(null, {
    success: function(Course) {
        // Execute any logic that should take place after the object is saved.
        alert

        ('New object created with objectId: ' + Course.id);
    },
    error: function(Course, error) {
        // Execute any logic that should take place if the save fails.
        // error is a Parse.Error with an error code and message.
        alert('Failed to create new object, with error code: ' + error.message);
    }
});
/**
 * Created by erikamotely on 4/13/16.
 */
