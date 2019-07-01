package hello;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
// Spring's annotations won't work, unless you import them.
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.ui.Model;

import org.springframework.ui.Model;
import org.springframework.ui.ModelMap;

//Tells the Spring that this module will act as a controller.
//Meaning, IoC will autodetect this class as the request handling class.
@Controller
public class GetFoos{

  SampleService sampleService = new SampleService();

  //When the client requests for /hello url, the GET method gets passed to the server.
  @RequestMapping(value = "/hello", method = RequestMethod.GET)
  //@ResponseBody annotation automatically serializes the returned object into JSON.
  @ResponseBody
  //@RequestParam represents the incoming HTTP request parameter.
  public String getFoos(/*@RequestParam("formId") int someNumber*/) {
      return "Post some Foos";
  }

  //@GetMapping maps the specfic URL to invoke the desired method.
  @GetMapping("/welcome")
  @ResponseBody
  public String showWelcome(){
    return "<html>" +
              "<head></head>" +
              "<h1> Burnning, </h1>" +
              "<body>fire mix tape.</body>" +
            "</html>";
  }

  @GetMapping("/sample")
  //The below seems to behave similar to the Android's function call,
  //I am not actually passing when the function gets invoked, Spring seems to do that for me.
  public String renderSample(Model model){
    // List<Sample> samples = sampleService.getSamples();
    // model.addAttribute("sample", samples);
    // model.addAttribute("sample", sampleService.getSample());
    //After excluding the .html extension, thymeleaf will look for the file
    //named below and return it.
    //Meaning, if I never imported thymeleaf, error page shows up.
    return "list";
  }

  //And code like the below can be used to process the incoming POST requests.
  //@PostMapping("/posts")
  //public String addPost(@RequestBody Post post) {
  //  // post will get the content of the body that is deserialized
  //  // into an object of type Post
  //}

  //@PathVariable could be used to deal with users putting invalid URL.
  // @GetMapping("/blogposts/{slug}")
  // public ModelAndView displayBlogPostBySlug(@PathVariable String slug)
          // throws BlogPostNotFoundException {
      // BlogPost blogPost = blogPostService.findBlogPostBySlug(slug)
              // .orElseThrow(() -> new BlogPostNotFoundException("Blog post with slug " + slug + " could not be found"));

      // return new ModelAndView("/blogposts/details", "blogPost", blogPost);
  // }

}
