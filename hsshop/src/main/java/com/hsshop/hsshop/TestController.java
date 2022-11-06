package com.hsshop.hsshop;

import javax.servlet.http.HttpServletRequest;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class TestController {

	@PostMapping("/ip")
	public ResponseEntity<String> ip (HttpServletRequest request){
		// 요청 보낸 클라이언트 ip 반환
		return ResponseEntity.ok(request.getRemoteAddr());
	}
}