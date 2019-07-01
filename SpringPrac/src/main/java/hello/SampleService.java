package hello;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

//@Service in Spring is like service in Angular,
//they float around in your project and are callable
//at any point of your application.
@Service
public class SampleService {

  List<Sample> list = new ArrayList<Sample>();

  public SampleService(){
    list.add(new Sample("Some data"));
    list.add(new Sample("More data"));
    list.add(new Sample("Super"));
    list.add(new Sample("programmer"));
  }

  public List<Sample> getSamples(){
    return this.list;
  }

  public Sample getSample(){
    return new Sample("New data");
  }
}
