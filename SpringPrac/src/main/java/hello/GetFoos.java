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
  public String getFoos() {
      return "Post some Foos";
  }

}
