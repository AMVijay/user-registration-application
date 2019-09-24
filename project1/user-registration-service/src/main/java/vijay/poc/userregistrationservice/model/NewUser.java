package vijay.poc.userregistrationservice.model;

import java.io.Serializable;

import lombok.Data;

@Data
public class NewUser implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -3778544361032882406L;
	
	private String firstName;
	
	private String lastName;
	
	private String email;
	
	private String department;

}
