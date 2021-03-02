function getAttributes() {
    var pwcdr = document.getElementById("pwcdr")
    var href = pwcdr.getAttribute("href")
    alert("The value of href is " +href)
    var id = pwcdr.getAttribute("id")
    alert("The value of id is " +id)
    var type = pwcdr.getAttribute("type")
    alert("The value of type is " +type)
    var hreflang = pwcdr.getAttribute("hreflang")
    alert("The value of hreflang is " +hreflang)
    var rel = pwcdr.getAttribute("rel")
    alert("The value of rel is " +rel)
    var target = pwcdr.getAttribute("target")
    alert("The value of target is " +target)

}