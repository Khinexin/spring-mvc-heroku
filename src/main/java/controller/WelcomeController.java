package controller;

import controller.service.ViewModelService;
import entity.user.User;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/welcome")
public class WelcomeController{

	private static final Logger logger = Logger.getLogger(WelcomeController.class);

    @Autowired
    ViewModelService viewModelService;

	@RequestMapping(method = RequestMethod.GET)
	public String getWelcomePage(Model model, @AuthenticationPrincipal User user) {
        viewModelService.getModelWithUserAttributes(model,user);
        logger.info("Usuário ativo: "+ user);
        return "welcome";
	}
}