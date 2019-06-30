package hello;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

//Tells the Spring that this module will act as a controller.
//Meaning, IoC will autodetect this class as the request handling class.
@Controller
public class GetFoos{

  //When the client requests for /hello url, the GET method gets passed to the server.
  @RequestMapping(value = "/hello", method = RequestMethod.GET)
  //@ResponseBody annotation automatically serializes the returned object into JSON.
  @ResponseBody
  //@RequestParam represents the incoming HTTP request parameter.
  public String getFoos(/*@RequestParam("formId") int someNumber*/) {
      return "Post some Foos";
  }

  @GetMapping("/welcome")
  @ResponseBody
  public String showWelcome(){
    return "<html><head></head><body>Fire mix tape.</body></html>";
  }

  //And code like the below can be used to process the incoming POST requests.
  //@PostMapping("/posts")
  //public String addPost(@RequestBody Post post) {
  //  // post will get the content of the body that is deserialized
  //  // into an object of type Post
  //}
}
