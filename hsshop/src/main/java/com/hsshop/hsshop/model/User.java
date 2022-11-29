package com.hsshop.hsshop.model;


import java.sql.Timestamp;

import javax.persistence.*;

import org.hibernate.annotations.CreationTimestamp;

import com.hsshop.hsshop.model.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class User {
	@Id // primary key
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(nullable = false, length = 100, unique = true)
	private String username;

	@Column(nullable = false, length = 100) // 해쉬를 통해 암호화할것임.
	private String password;

	@Column(nullable = false, length = 50)
	private String email;


	@CreationTimestamp // 자바에서 데이터가져와서 넣어줌
	private Timestamp createDate;
}
