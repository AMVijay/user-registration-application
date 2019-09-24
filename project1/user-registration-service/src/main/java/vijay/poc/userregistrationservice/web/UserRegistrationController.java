package vijay.poc.userregistrationservice.web;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import vijay.poc.userregistrationservice.model.NewUser;

@RestController
@RequestMapping(path = "userRegistration")
public class UserRegistrationController {
	
	
	@RequestMapping(path = "/logNewUser", method = RequestMethod.POST )
	public void logNewUser(@RequestBody NewUser newUser) {
		System.out.println("Log User");
	}

}
