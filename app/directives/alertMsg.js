module.exports = function() {
    return {
        template : "<div class=\"alert alert-success text-center\">\n" +
        "            <p> {{title}} <b ng-transclude> msg alert </b> </p>\n" +
        "           </div>",
        replace : false,
        restrict : "AE",
        scope : {
            title : '@'
        },
        transclude : true
    };
};