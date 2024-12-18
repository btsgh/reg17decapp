export default {
	lookupTableData: [
		{
			"Member ID": "1145725528",
			"First Name": "John",
			"Last Name": "Doe",
			"Date of Birth": "2002-11-14",
			"Enrollment Status": "Pending",
			"Prior Member ID": "",
			"Gender": "Male",
			"Drug Patient": "Y",
			"Drug Indication": "Indication Drug",
			"Drug Admin Patient": "Y",
			"Drug Admin Indication": "Indication Admin",
			"Original Enrollment Date Drug": "2023-11-17",
			"Original Enrollment Date Drug Admin": "2023-11-17",
			"Current Enrollment Date Drug": "2024-01-01",
			"Current Enrollment Date Drug Admin": "2024-01-01",
			"Enrollment Source": "patient",
			"Address": "123 Main St",
			"City": "Newport",
			"State": "CA",
			"Zipcode": "11111",
			"Phone": "(123) 456-7890",
			"Email": "john.doe@example.com",
			"Database ID": 2004642,
			"Card Pii": "",
			"Eligibility Data": {
				"drug": {
					"answer_01": "yes",
					"answer_02": "yes",
					"answer_03": "1",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "CA",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				},
				"admin": {
					"answer_01": "yes",
					"answer_02": "yes",
					"answer_03": "1",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "CA",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				}
			},
			"Medicare": "",
			"patient_enrollment": {
				"original_enrollment_date": "2023-11-17",
				"enrollment_date": "2023-11-17",
				"first_name": "John",
				"last_name": "Doe",
				"date_of_birth": "2002-11-14",
				"gender": "Male",
				"request_card": "n",
				"phone": "(123) 456-7890",
				"address": {
					"address_1": "123 Main St",
					"city": "Newport",
					"state": "CA",
					"zip_code": "11111",
					"address_2": ""
				},
				"commercial_insurance": {
					"medical_insurance": {
						"name": "BCBS",
						"plan_type": "HMO",
						"member_number": "123",
						"effective_date": "2023-01-01",
						"group_number": "12345",
						"bin": "",
						"pcn": ""
					},
					"rx_insurance": {
						"name": "",
						"plan_type": "",
						"member_number": "",
						"group_number": "",
						"bin": "",
						"pcn": ""
					}
				},
				"lap": {
					"first_name": "",
					"last_name": "",
					"address": {
						"address_1": "",
						"city": "",
						"state": "",
						"zip_code": "",
						"address_2": ""
					},
					"phone": ""
				},
				"enrolled_by": "patient",
				"phone_type": "Home",
				"email": "john.doe@example.com",
				"email_opt_in": "N",
				"member_id": "1145725528"
			},
			"provider_data": {
				"primary": [
					{
						"provider_id": "500011",
						"npi": "0000000006"
					}
				],
				"secondary": [
					{
						"provider_id": "",
						"npi": ""
					}
				]
			},
			"patient_lap": {
				"first_name": "",
				"last_name": "",
				"address": {
					"address_1": "",
					"city": "",
					"state": "",
					"zip_code": "",
					"address_2": ""
				},
				"phone": ""
			},
			"patient_provider_data": {
				"primary": [
					{
						"first_name": "John",
						"npi": "0000000006",
						"last_name": "Doe",
						"phones": {
							"phone": "1234567890"
						},
						"address": {
							"address1": "123 Main St",
							"address2": "",
							"city": "Newport",
							"state": "CA",
							"zip_code": "11111"
						}
					}
				],
				"secondary": [
					{
						"practice_name": "",
						"npi": "",
						"phones": {
							"phone": ""
						},
						"address": {
							"address1": "",
							"address2": "",
							"city": "",
							"state": "",
							"zip_code": ""
						}
					}
				]
			},
			"patient_commercial_insurance": {
				"medical_insurance": {
					"name": "BCBS",
					"plan_type": "HMO",
					"member_number": "123",
					"effective_date": "2023-01-01",
					"group_number": "12345",
					"bin": "",
					"pcn": ""
				},
				"rx_insurance": {
					"name": "",
					"plan_type": "",
					"member_number": "",
					"group_number": "",
					"bin": "",
					"pcn": ""
				}
			},
			"patient_benefits_amounts": {
				"current_period": {
					"total_amount_drug": 15000,
					"total_amount_drug_admin": 1500,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1500,
					"used_amount_drug": 0,
					"used_amount_drug_admin": 0,
					"use_count_drug": 0,
					"use_count_drug_admin": 0
				},
				"prior_period": {
					"total_amount_drug": 15000,
					"total_amount_drug_admin": 1500,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1500,
					"used_amount_drug": 0,
					"used_amount_drug_admin": 0,
					"use_count_drug": 0,
					"use_count_drug_admin": 0
				}
			},
			"card_data": {},
			"verification_data": {
				"request": {
					"PatientPersonalInfo": {
						"FirstName": "John",
						"LastName": "Doe",
						"DateOfBirth": "2002-11-14",
						"Gender": "Male",
						"City": "Newport",
						"State": "CA",
						"Zipcode": "11111",
						"Email": "john.doe@example.com",
						"PhoneNumber": "(123) 456-7890"
					},
					"PatientMedicalInsurance": {
						"name": "BCBS",
						"plan_type": "HMO",
						"member_number": "123",
						"effective_date": "2023-01-01",
						"group_number": "12345",
						"bin": "",
						"pcn": ""
					},
					"PatientPharmacyInsurance": {
						"payer_name": "",
						"payer_type": "",
						"plan_bin": "",
						"plan_pcn": "",
						"plan_group": "",
						"plan_id": "",
						"plan_start_date": "",
						"plan_end_date": ""
					},
					"CardRequestInfo": {
						"Type": "Xolair_WEB"
					}
				},
				"response": {
					"CardResponseInfo": {
						"MemberId": "1145725528",
						"Bin": "123456",
						"Pcn": "pcn",
						"Group": "group",
						"AllowableUses": "999",
						"BenefitAmount": "15000",
						"Status": "Inactive"
					},
					"TransactionInfo": {
						"TransactionId": "e2f07b01-02e0-4bf3-85a0-06d5c6bfeda8",
						"TransactionCreatedDateTime": "2023-11-17T18:08:05.941Z",
						"EnrollmentStatus": "Not Determined"
					}
				}
			},
			"credentials_id": "1145725528",
			"Enrollment End Date": "2024-12-31",
			"Enrollment Status Reason": ""
		},
		{
			"Member ID": "1145725529",
			"First Name": "Jane",
			"Last Name": "Smith",
			"Date of Birth": "1988-03-22",
			"Enrollment Status": "Active",
			"Prior Member ID": "1234567890",
			"Gender": "Female",
			"Drug Patient": "N",
			"Drug Indication": "NA",
			"Drug Admin Patient": "Y",
			"Drug Admin Indication": "Indication Admin",
			"Original Enrollment Date Drug": "2022-08-01",
			"Original Enrollment Date Drug Admin": "2022-08-01",
			"Current Enrollment Date Drug": "",
			"Current Enrollment Date Drug Admin": "2024-01-01",
			"Enrollment Source": "provider",
			"Address": "456 Elm St",
			"City": "Springfield",
			"State": "IL",
			"Zipcode": "62704",
			"Phone": "(217) 555-1234",
			"Email": "jane.smith@example.com",
			"Database ID": 2004643,
			"Card Pii": "",
			"Eligibility Data": {
				"drug": {
					"answer_01": "no",
					"answer_02": "no",
					"answer_03": "0",
					"answer_04": "no",
					"answer_05": "yes",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "disagree",
					"answer_18": "disagree"
				},
				"admin": {
					"answer_01": "yes",
					"answer_02": "yes",
					"answer_03": "2",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				}
			},
			"Medicare": "",
			"patient_enrollment": {
				"original_enrollment_date": "2022-08-01",
				"enrollment_date": "2022-08-01",
				"first_name": "Jane",
				"last_name": "Smith",
				"date_of_birth": "1988-03-22",
				"gender": "Female",
				"request_card": "n",
				"phone": "(217) 555-1234",
				"address": {
					"address_1": "456 Elm St",
					"city": "Springfield",
					"state": "IL",
					"zip_code": "62704",
					"address_2": ""
				},
				"commercial_insurance": {
					"medical_insurance": {
						"name": "Aetna",
						"plan_type": "PPO",
						"member_number": "456",
						"effective_date": "2022-08-01",
						"group_number": "67890",
						"bin": "",
						"pcn": ""
					},
					"rx_insurance": {
						"name": "CVS Caremark",
						"plan_type": "Rx",
						"member_number": "789",
						"group_number": "98765",
						"bin": "987654",
						"pcn": "pcn"
					}
				},
				"lap": {
					"first_name": "",
					"last_name": "",
					"address": {
						"address_1": "",
						"city": "",
						"state": "",
						"zip_code": "",
						"address_2": ""
					},
					"phone": ""
				},
				"enrolled_by": "provider",
				"phone_type": "Mobile",
				"email": "jane.smith@example.com",
				"email_opt_in": "Y",
				"member_id": "1145725529"
			},
			"provider_data": {
				"primary": [
					{
						"provider_id": "500012",
						"npi": "0000000007"
					}
				],
				"secondary": [
					{
						"provider_id": "500013",
						"npi": "0000000008"
					}
				]
			},
			"patient_lap": {
				"first_name": "",
				"last_name": "",
				"address": {
					"address_1": "",
					"city": "",
					"state": "",
					"zip_code": "",
					"address_2": ""
				},
				"phone": ""
			},
			"patient_provider_data": {
				"primary": [
					{
						"first_name": "James",
						"npi": "0000000007",
						"last_name": "Brown",
						"phones": {
							"phone": "2175551234"
						},
						"address": {
							"address1": "456 Elm St",
							"address2": "",
							"city": "Springfield",
							"state": "IL",
							"zip_code": "62704"
						}
					}
				],
				"secondary": [
					{
						"practice_name": "Clinic 2",
						"npi": "0000000008",
						"phones": {
							"phone": "2175554321"
						},
						"address": {
							"address1": "789 Oak St",
							"address2": "",
							"city": "Springfield",
							"state": "IL",
							"zip_code": "62701"
						}
					}
				]
			},
			"patient_commercial_insurance": {
				"medical_insurance": {
					"name": "Aetna",
					"plan_type": "PPO",
					"member_number": "456",
					"effective_date": "2022-08-01",
					"group_number": "67890",
					"bin": "",
					"pcn": ""
				},
				"rx_insurance": {
					"name": "CVS Caremark",
					"plan_type": "Rx",
					"member_number": "789",
					"group_number": "98765",
					"bin": "987654",
					"pcn": "pcn"
				}
			},
			"patient_benefits_amounts": {
				"current_period": {
					"total_amount_drug": 20000,
					"total_amount_drug_admin": 2500,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1000,
					"used_amount_drug": 5000,
					"used_amount_drug_admin": 1500,
					"use_count_drug": 3,
					"use_count_drug_admin": 2
				},
				"prior_period": {
					"total_amount_drug": 20000,
					"total_amount_drug_admin": 2500,
					"balance_amount_drug": 10000,
					"balance_amount_drug_admin": 500,
					"used_amount_drug": 10000,
					"used_amount_drug_admin": 2000,
					"use_count_drug": 6,
					"use_count_drug_admin": 4
				}
			},
			"card_data": {},
			"verification_data": {
				"request": {
					"PatientPersonalInfo": {
						"FirstName": "Jane",
						"LastName": "Smith",
						"DateOfBirth": "1988-03-22",
						"Gender": "Female",
						"City": "Springfield",
						"State": "IL",
						"Zipcode": "62704",
						"Email": "jane.smith@example.com",
						"PhoneNumber": "(217) 555-1234"
					},
					"PatientMedicalInsurance": {
						"name": "Aetna",
						"plan_type": "PPO",
						"member_number": "456",
						"effective_date": "2022-08-01",
						"group_number": "67890",
						"bin": "",
						"pcn": ""
					},
					"PatientPharmacyInsurance": {
						"payer_name": "CVS Caremark",
						"payer_type": "Rx",
						"plan_bin": "987654",
						"plan_pcn": "pcn",
						"plan_group": "98765",
						"plan_id": "789",
						"plan_start_date": "2022-08-01",
						"plan_end_date": ""
					},
					"CardRequestInfo": {
						"Type": "Xolair_WEB"
					}
				},
				"response": {
					"CardResponseInfo": {
						"MemberId": "1145725529",
						"Bin": "987654",
						"Pcn": "pcn",
						"Group": "group",
						"AllowableUses": "999",
						"BenefitAmount": "20000",
						"Status": "Active"
					},
					"TransactionInfo": {
						"TransactionId": "e3f07b01-02e0-4bf3-85a0-06d5c6bfeda8",
						"TransactionCreatedDateTime": "2023-11-17T18:08:05.941Z",
						"EnrollmentStatus": "Determined"
					}
				}
			},
			"credentials_id": "1145725529",
			"Enrollment End Date": "2025-12-31",
			"Enrollment Status Reason": "Eligibility Confirmed"
		},
		{
			"Member ID": "1145725530",
			"First Name": "Alice",
			"Last Name": "Johnson",
			"Date of Birth": "1990-05-15",
			"Enrollment Status": "Expired",
			"Prior Member ID": "",
			"Gender": "Female",
			"Drug Patient": "Y",
			"Drug Indication": "Indication Drug",
			"Drug Admin Patient": "Y",
			"Drug Admin Indication": "Indication Admin",
			"Original Enrollment Date Drug": "2021-03-10",
			"Original Enrollment Date Drug Admin": "2021-03-10",
			"Current Enrollment Date Drug": "2022-03-10",
			"Current Enrollment Date Drug Admin": "2022-03-10",
			"Enrollment Source": "self",
			"Address": "789 Pine St",
			"City": "Springfield",
			"State": "IL",
			"Zipcode": "62701",
			"Phone": "(217) 555-9876",
			"Email": "alice.johnson@example.com",
			"Database ID": 3005754,
			"Card Pii": "",
			"Eligibility Data": {
				"drug": {
					"answer_01": "yes",
					"answer_02": "no",
					"answer_03": "1",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "disagree",
					"answer_18": "disagree"
				},
				"admin": {
					"answer_01": "no",
					"answer_02": "yes",
					"answer_03": "0",
					"answer_04": "no",
					"answer_05": "yes",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				}
			},
			"Medicare": "",
			"patient_enrollment": {
				"original_enrollment_date": "2021-03-10",
				"enrollment_date": "2022-03-10",
				"first_name": "Alice",
				"last_name": "Johnson",
				"date_of_birth": "1990-05-15",
				"gender": "Female",
				"request_card": "n",
				"phone": "(217) 555-9876",
				"address": {
					"address_1": "789 Pine St",
					"city": "Springfield",
					"state": "IL",
					"zip_code": "62701",
					"address_2": ""
				},
				"commercial_insurance": {
					"medical_insurance": {
						"name": "UnitedHealthcare",
						"plan_type": "HMO",
						"member_number": "654",
						"effective_date": "2021-03-10",
						"group_number": "54321",
						"bin": "",
						"pcn": ""
					},
					"rx_insurance": {
						"name": "OptumRx",
						"plan_type": "Rx",
						"member_number": "321",
						"group_number": "13579",
						"bin": "135791",
						"pcn": "pcn"
					}
				},
				"lap": {
					"first_name": "",
					"last_name": "",
					"address": {
						"address_1": "",
						"city": "",
						"state": "",
						"zip_code": "",
						"address_2": ""
					},
					"phone": ""
				},
				"enrolled_by": "self",
				"phone_type": "Home",
				"email": "alice.johnson@example.com",
				"email_opt_in": "N",
				"member_id": "1145725530"
			},
			"provider_data": {
				"primary": [
					{
						"provider_id": "500014",
						"npi": "0000000009"
					}
				],
				"secondary": []
			},
			"patient_lap": {
				"first_name": "",
				"last_name": "",
				"address": {
					"address_1": "",
					"city": "",
					"state": "",
					"zip_code": "",
					"address_2": ""
				},
				"phone": ""
			},
			"patient_provider_data": {
				"primary": [
					{
						"first_name": "Linda",
						"npi": "0000000009",
						"last_name": "White",
						"phones": {
							"phone": "2175559876"
						},
						"address": {
							"address1": "789 Pine St",
							"address2": "",
							"city": "Springfield",
							"state": "IL",
							"zip_code": "62701"
						}
					}
				],
				"secondary": []
			},
			"patient_commercial_insurance": {
				"medical_insurance": {
					"name": "UnitedHealthcare",
					"plan_type": "HMO",
					"member_number": "654",
					"effective_date": "2021-03-10",
					"group_number": "54321",
					"bin": "",
					"pcn": ""
				},
				"rx_insurance": {
					"name": "OptumRx",
					"plan_type": "Rx",
					"member_number": "321",
					"group_number": "13579",
					"bin": "135791",
					"pcn": "pcn"
				}
			},
			"patient_benefits_amounts": {
				"current_period": {
					"total_amount_drug": 18000,
					"total_amount_drug_admin": 2000,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1500,
					"used_amount_drug": 3000,
					"used_amount_drug_admin": 500,
					"use_count_drug": 1,
					"use_count_drug_admin": 1
				},
				"prior_period": {
					"total_amount_drug": 18000,
					"total_amount_drug_admin": 2000,
					"balance_amount_drug": 9000,
					"balance_amount_drug_admin": 1000,
					"used_amount_drug": 9000,
					"used_amount_drug_admin": 1000,
					"use_count_drug": 3,
					"use_count_drug_admin": 2
				}
			},
			"card_data": {},
			"verification_data": {
				"request": {
					"PatientPersonalInfo": {
						"FirstName": "Alice",
						"LastName": "Johnson",
						"DateOfBirth": "1990-05-15",
						"Gender": "Female",
						"City": "Springfield",
						"State": "IL",
						"Zipcode": "62701",
						"Email": "alice.johnson@example.com",
						"PhoneNumber": "(217) 555-9876"
					},
					"PatientMedicalInsurance": {
						"name": "UnitedHealthcare",
						"plan_type": "HMO",
						"member_number": "654",
						"effective_date": "2021-03-10",
						"group_number": "54321",
						"bin": "",
						"pcn": ""
					},
					"PatientPharmacyInsurance": {
						"payer_name": "OptumRx",
						"payer_type": "Rx",
						"plan_bin": "135791",
						"plan_pcn": "pcn",
						"plan_group": "13579",
						"plan_id": "321",
						"plan_start_date": "2021-03-10",
						"plan_end_date": ""
					},
					"CardRequestInfo": {
						"Type": "Xolair_WEB"
					}
				},
				"response": {
					"CardResponseInfo": {
						"MemberId": "1145725530",
						"Bin": "135791",
						"Pcn": "pcn",
						"Group": "group",
						"AllowableUses": "999",
						"BenefitAmount": "18000",
						"Status": "Expired"
					},
					"TransactionInfo": {
						"TransactionId": "f4a07b01-02e0-4bf3-85a0-06d5c6bfeda8",
						"TransactionCreatedDateTime": "2023-12-17T18:08:05.941Z",
						"EnrollmentStatus": "Expired"
					}
				}
			},
			"credentials_id": "1145725530",
			"Enrollment End Date": "2023-12-31",
			"Enrollment Status Reason": "Eligibility Expired"
		},
		{
			"Member ID": "1145725528",
			"First Name": "John",
			"Last Name": "Doe",
			"Date of Birth": "2002-11-14",
			"Enrollment Status": "Pending",
			"Prior Member ID": "",
			"Gender": "Male",
			"Drug Patient": "Y",
			"Drug Indication": "Indication Drug",
			"Drug Admin Patient": "Y",
			"Drug Admin Indication": "Indication Admin",
			"Original Enrollment Date Drug": "2023-11-17",
			"Original Enrollment Date Drug Admin": "2023-11-17",
			"Current Enrollment Date Drug": "2024-01-01",
			"Current Enrollment Date Drug Admin": "2024-01-01",
			"Enrollment Source": "patient",
			"Address": "123 Main St",
			"City": "Newport",
			"State": "CA",
			"Zipcode": "11111",
			"Phone": "(123) 456-7890",
			"Email": "john.doe@example.com",
			"Database ID": 2004642,
			"Card Pii": "",
			"Eligibility Data": {
				"drug": {
					"answer_01": "yes",
					"answer_02": "yes",
					"answer_03": "1",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "CA",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				},
				"admin": {
					"answer_01": "yes",
					"answer_02": "yes",
					"answer_03": "1",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "CA",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				}
			},
			"Medicare": "",
			"patient_enrollment": {
				"original_enrollment_date": "2023-11-17",
				"enrollment_date": "2023-11-17",
				"first_name": "John",
				"last_name": "Doe",
				"date_of_birth": "2002-11-14",
				"gender": "Male",
				"request_card": "n",
				"phone": "(123) 456-7890",
				"address": {
					"address_1": "123 Main St",
					"city": "Newport",
					"state": "CA",
					"zip_code": "11111",
					"address_2": ""
				},
				"commercial_insurance": {
					"medical_insurance": {
						"name": "BCBS",
						"plan_type": "HMO",
						"member_number": "123",
						"effective_date": "2023-01-01",
						"group_number": "12345",
						"bin": "",
						"pcn": ""
					},
					"rx_insurance": {
						"name": "",
						"plan_type": "",
						"member_number": "",
						"group_number": "",
						"bin": "",
						"pcn": ""
					}
				},
				"lap": {
					"first_name": "",
					"last_name": "",
					"address": {
						"address_1": "",
						"city": "",
						"state": "",
						"zip_code": "",
						"address_2": ""
					},
					"phone": ""
				},
				"enrolled_by": "patient",
				"phone_type": "Home",
				"email": "john.doe@example.com",
				"email_opt_in": "N",
				"member_id": "1145725528"
			},
			"provider_data": {
				"primary": [
					{
						"provider_id": "500011",
						"npi": "0000000006"
					}
				],
				"secondary": [
					{
						"provider_id": "",
						"npi": ""
					}
				]
			},
			"patient_lap": {
				"first_name": "",
				"last_name": "",
				"address": {
					"address_1": "",
					"city": "",
					"state": "",
					"zip_code": "",
					"address_2": ""
				},
				"phone": ""
			},
			"patient_provider_data": {
				"primary": [
					{
						"first_name": "John",
						"npi": "0000000006",
						"last_name": "Doe",
						"phones": {
							"phone": "1234567890"
						},
						"address": {
							"address1": "123 Main St",
							"address2": "",
							"city": "Newport",
							"state": "CA",
							"zip_code": "11111"
						}
					}
				],
				"secondary": [
					{
						"practice_name": "",
						"npi": "",
						"phones": {
							"phone": ""
						},
						"address": {
							"address1": "",
							"address2": "",
							"city": "",
							"state": "",
							"zip_code": ""
						}
					}
				]
			},
			"patient_commercial_insurance": {
				"medical_insurance": {
					"name": "BCBS",
					"plan_type": "HMO",
					"member_number": "123",
					"effective_date": "2023-01-01",
					"group_number": "12345",
					"bin": "",
					"pcn": ""
				},
				"rx_insurance": {
					"name": "",
					"plan_type": "",
					"member_number": "",
					"group_number": "",
					"bin": "",
					"pcn": ""
				}
			},
			"patient_benefits_amounts": {
				"current_period": {
					"total_amount_drug": 15000,
					"total_amount_drug_admin": 1500,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1500,
					"used_amount_drug": 0,
					"used_amount_drug_admin": 0,
					"use_count_drug": 0,
					"use_count_drug_admin": 0
				},
				"prior_period": {
					"total_amount_drug": 15000,
					"total_amount_drug_admin": 1500,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1500,
					"used_amount_drug": 0,
					"used_amount_drug_admin": 0,
					"use_count_drug": 0,
					"use_count_drug_admin": 0
				}
			},
			"card_data": {},
			"verification_data": {
				"request": {
					"PatientPersonalInfo": {
						"FirstName": "John",
						"LastName": "Doe",
						"DateOfBirth": "2002-11-14",
						"Gender": "Male",
						"City": "Newport",
						"State": "CA",
						"Zipcode": "11111",
						"Email": "john.doe@example.com",
						"PhoneNumber": "(123) 456-7890"
					},
					"PatientMedicalInsurance": {
						"name": "BCBS",
						"plan_type": "HMO",
						"member_number": "123",
						"effective_date": "2023-01-01",
						"group_number": "12345",
						"bin": "",
						"pcn": ""
					},
					"PatientPharmacyInsurance": {
						"payer_name": "",
						"payer_type": "",
						"plan_bin": "",
						"plan_pcn": "",
						"plan_group": "",
						"plan_id": "",
						"plan_start_date": "",
						"plan_end_date": ""
					},
					"CardRequestInfo": {
						"Type": "Xolair_WEB"
					}
				},
				"response": {
					"CardResponseInfo": {
						"MemberId": "1145725528",
						"Bin": "123456",
						"Pcn": "pcn",
						"Group": "group",
						"AllowableUses": "999",
						"BenefitAmount": "15000",
						"Status": "Inactive"
					},
					"TransactionInfo": {
						"TransactionId": "e2f07b01-02e0-4bf3-85a0-06d5c6bfeda8",
						"TransactionCreatedDateTime": "2023-11-17T18:08:05.941Z",
						"EnrollmentStatus": "Not Determined"
					}
				}
			},
			"credentials_id": "1145725528",
			"Enrollment End Date": "2024-12-31",
			"Enrollment Status Reason": ""
		},
		{
			"Member ID": "1145725529",
			"First Name": "Jane",
			"Last Name": "Smith",
			"Date of Birth": "1988-03-22",
			"Enrollment Status": "Active",
			"Prior Member ID": "1234567890",
			"Gender": "Female",
			"Drug Patient": "N",
			"Drug Indication": "NA",
			"Drug Admin Patient": "Y",
			"Drug Admin Indication": "Indication Admin",
			"Original Enrollment Date Drug": "2022-08-01",
			"Original Enrollment Date Drug Admin": "2022-08-01",
			"Current Enrollment Date Drug": "",
			"Current Enrollment Date Drug Admin": "2024-01-01",
			"Enrollment Source": "provider",
			"Address": "456 Elm St",
			"City": "Springfield",
			"State": "IL",
			"Zipcode": "62704",
			"Phone": "(217) 555-1234",
			"Email": "jane.smith@example.com",
			"Database ID": 2004643,
			"Card Pii": "",
			"Eligibility Data": {
				"drug": {
					"answer_01": "no",
					"answer_02": "no",
					"answer_03": "0",
					"answer_04": "no",
					"answer_05": "yes",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "disagree",
					"answer_18": "disagree"
				},
				"admin": {
					"answer_01": "yes",
					"answer_02": "yes",
					"answer_03": "2",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				}
			},
			"Medicare": "",
			"patient_enrollment": {
				"original_enrollment_date": "2022-08-01",
				"enrollment_date": "2022-08-01",
				"first_name": "Jane",
				"last_name": "Smith",
				"date_of_birth": "1988-03-22",
				"gender": "Female",
				"request_card": "n",
				"phone": "(217) 555-1234",
				"address": {
					"address_1": "456 Elm St",
					"city": "Springfield",
					"state": "IL",
					"zip_code": "62704",
					"address_2": ""
				},
				"commercial_insurance": {
					"medical_insurance": {
						"name": "Aetna",
						"plan_type": "PPO",
						"member_number": "456",
						"effective_date": "2022-08-01",
						"group_number": "67890",
						"bin": "",
						"pcn": ""
					},
					"rx_insurance": {
						"name": "CVS Caremark",
						"plan_type": "Rx",
						"member_number": "789",
						"group_number": "98765",
						"bin": "987654",
						"pcn": "pcn"
					}
				},
				"lap": {
					"first_name": "",
					"last_name": "",
					"address": {
						"address_1": "",
						"city": "",
						"state": "",
						"zip_code": "",
						"address_2": ""
					},
					"phone": ""
				},
				"enrolled_by": "provider",
				"phone_type": "Mobile",
				"email": "jane.smith@example.com",
				"email_opt_in": "Y",
				"member_id": "1145725529"
			},
			"provider_data": {
				"primary": [
					{
						"provider_id": "500012",
						"npi": "0000000007"
					}
				],
				"secondary": [
					{
						"provider_id": "500013",
						"npi": "0000000008"
					}
				]
			},
			"patient_lap": {
				"first_name": "",
				"last_name": "",
				"address": {
					"address_1": "",
					"city": "",
					"state": "",
					"zip_code": "",
					"address_2": ""
				},
				"phone": ""
			},
			"patient_provider_data": {
				"primary": [
					{
						"first_name": "James",
						"npi": "0000000007",
						"last_name": "Brown",
						"phones": {
							"phone": "2175551234"
						},
						"address": {
							"address1": "456 Elm St",
							"address2": "",
							"city": "Springfield",
							"state": "IL",
							"zip_code": "62704"
						}
					}
				],
				"secondary": [
					{
						"practice_name": "Clinic 2",
						"npi": "0000000008",
						"phones": {
							"phone": "2175554321"
						},
						"address": {
							"address1": "789 Oak St",
							"address2": "",
							"city": "Springfield",
							"state": "IL",
							"zip_code": "62701"
						}
					}
				]
			},
			"patient_commercial_insurance": {
				"medical_insurance": {
					"name": "Aetna",
					"plan_type": "PPO",
					"member_number": "456",
					"effective_date": "2022-08-01",
					"group_number": "67890",
					"bin": "",
					"pcn": ""
				},
				"rx_insurance": {
					"name": "CVS Caremark",
					"plan_type": "Rx",
					"member_number": "789",
					"group_number": "98765",
					"bin": "987654",
					"pcn": "pcn"
				}
			},
			"patient_benefits_amounts": {
				"current_period": {
					"total_amount_drug": 20000,
					"total_amount_drug_admin": 2500,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1000,
					"used_amount_drug": 5000,
					"used_amount_drug_admin": 1500,
					"use_count_drug": 3,
					"use_count_drug_admin": 2
				},
				"prior_period": {
					"total_amount_drug": 20000,
					"total_amount_drug_admin": 2500,
					"balance_amount_drug": 10000,
					"balance_amount_drug_admin": 500,
					"used_amount_drug": 10000,
					"used_amount_drug_admin": 2000,
					"use_count_drug": 6,
					"use_count_drug_admin": 4
				}
			},
			"card_data": {},
			"verification_data": {
				"request": {
					"PatientPersonalInfo": {
						"FirstName": "Jane",
						"LastName": "Smith",
						"DateOfBirth": "1988-03-22",
						"Gender": "Female",
						"City": "Springfield",
						"State": "IL",
						"Zipcode": "62704",
						"Email": "jane.smith@example.com",
						"PhoneNumber": "(217) 555-1234"
					},
					"PatientMedicalInsurance": {
						"name": "Aetna",
						"plan_type": "PPO",
						"member_number": "456",
						"effective_date": "2022-08-01",
						"group_number": "67890",
						"bin": "",
						"pcn": ""
					},
					"PatientPharmacyInsurance": {
						"payer_name": "CVS Caremark",
						"payer_type": "Rx",
						"plan_bin": "987654",
						"plan_pcn": "pcn",
						"plan_group": "98765",
						"plan_id": "789",
						"plan_start_date": "2022-08-01",
						"plan_end_date": ""
					},
					"CardRequestInfo": {
						"Type": "Xolair_WEB"
					}
				},
				"response": {
					"CardResponseInfo": {
						"MemberId": "1145725529",
						"Bin": "987654",
						"Pcn": "pcn",
						"Group": "group",
						"AllowableUses": "999",
						"BenefitAmount": "20000",
						"Status": "Active"
					},
					"TransactionInfo": {
						"TransactionId": "e3f07b01-02e0-4bf3-85a0-06d5c6bfeda8",
						"TransactionCreatedDateTime": "2023-11-17T18:08:05.941Z",
						"EnrollmentStatus": "Determined"
					}
				}
			},
			"credentials_id": "1145725529",
			"Enrollment End Date": "2025-12-31",
			"Enrollment Status Reason": "Eligibility Confirmed"
		},
		{
			"Member ID": "1145725530",
			"First Name": "Alice",
			"Last Name": "Johnson",
			"Date of Birth": "1990-05-15",
			"Enrollment Status": "Expired",
			"Prior Member ID": "",
			"Gender": "Female",
			"Drug Patient": "Y",
			"Drug Indication": "Indication Drug",
			"Drug Admin Patient": "Y",
			"Drug Admin Indication": "Indication Admin",
			"Original Enrollment Date Drug": "2021-03-10",
			"Original Enrollment Date Drug Admin": "2021-03-10",
			"Current Enrollment Date Drug": "2022-03-10",
			"Current Enrollment Date Drug Admin": "2022-03-10",
			"Enrollment Source": "self",
			"Address": "789 Pine St",
			"City": "Springfield",
			"State": "IL",
			"Zipcode": "62701",
			"Phone": "(217) 555-9876",
			"Email": "alice.johnson@example.com",
			"Database ID": 3005754,
			"Card Pii": "",
			"Eligibility Data": {
				"drug": {
					"answer_01": "yes",
					"answer_02": "no",
					"answer_03": "1",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "disagree",
					"answer_18": "disagree"
				},
				"admin": {
					"answer_01": "no",
					"answer_02": "yes",
					"answer_03": "0",
					"answer_04": "no",
					"answer_05": "yes",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				}
			},
			"Medicare": "",
			"patient_enrollment": {
				"original_enrollment_date": "2021-03-10",
				"enrollment_date": "2022-03-10",
				"first_name": "Alice",
				"last_name": "Johnson",
				"date_of_birth": "1990-05-15",
				"gender": "Female",
				"request_card": "n",
				"phone": "(217) 555-9876",
				"address": {
					"address_1": "789 Pine St",
					"city": "Springfield",
					"state": "IL",
					"zip_code": "62701",
					"address_2": ""
				},
				"commercial_insurance": {
					"medical_insurance": {
						"name": "UnitedHealthcare",
						"plan_type": "HMO",
						"member_number": "654",
						"effective_date": "2021-03-10",
						"group_number": "54321",
						"bin": "",
						"pcn": ""
					},
					"rx_insurance": {
						"name": "OptumRx",
						"plan_type": "Rx",
						"member_number": "321",
						"group_number": "13579",
						"bin": "135791",
						"pcn": "pcn"
					}
				},
				"lap": {
					"first_name": "",
					"last_name": "",
					"address": {
						"address_1": "",
						"city": "",
						"state": "",
						"zip_code": "",
						"address_2": ""
					},
					"phone": ""
				},
				"enrolled_by": "self",
				"phone_type": "Home",
				"email": "alice.johnson@example.com",
				"email_opt_in": "N",
				"member_id": "1145725530"
			},
			"provider_data": {
				"primary": [
					{
						"provider_id": "500014",
						"npi": "0000000009"
					}
				],
				"secondary": []
			},
			"patient_lap": {
				"first_name": "",
				"last_name": "",
				"address": {
					"address_1": "",
					"city": "",
					"state": "",
					"zip_code": "",
					"address_2": ""
				},
				"phone": ""
			},
			"patient_provider_data": {
				"primary": [
					{
						"first_name": "Linda",
						"npi": "0000000009",
						"last_name": "White",
						"phones": {
							"phone": "2175559876"
						},
						"address": {
							"address1": "789 Pine St",
							"address2": "",
							"city": "Springfield",
							"state": "IL",
							"zip_code": "62701"
						}
					}
				],
				"secondary": []
			},
			"patient_commercial_insurance": {
				"medical_insurance": {
					"name": "UnitedHealthcare",
					"plan_type": "HMO",
					"member_number": "654",
					"effective_date": "2021-03-10",
					"group_number": "54321",
					"bin": "",
					"pcn": ""
				},
				"rx_insurance": {
					"name": "OptumRx",
					"plan_type": "Rx",
					"member_number": "321",
					"group_number": "13579",
					"bin": "135791",
					"pcn": "pcn"
				}
			},
			"patient_benefits_amounts": {
				"current_period": {
					"total_amount_drug": 18000,
					"total_amount_drug_admin": 2000,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1500,
					"used_amount_drug": 3000,
					"used_amount_drug_admin": 500,
					"use_count_drug": 1,
					"use_count_drug_admin": 1
				},
				"prior_period": {
					"total_amount_drug": 18000,
					"total_amount_drug_admin": 2000,
					"balance_amount_drug": 9000,
					"balance_amount_drug_admin": 1000,
					"used_amount_drug": 9000,
					"used_amount_drug_admin": 1000,
					"use_count_drug": 3,
					"use_count_drug_admin": 2
				}
			},
			"card_data": {},
			"verification_data": {
				"request": {
					"PatientPersonalInfo": {
						"FirstName": "Alice",
						"LastName": "Johnson",
						"DateOfBirth": "1990-05-15",
						"Gender": "Female",
						"City": "Springfield",
						"State": "IL",
						"Zipcode": "62701",
						"Email": "alice.johnson@example.com",
						"PhoneNumber": "(217) 555-9876"
					},
					"PatientMedicalInsurance": {
						"name": "UnitedHealthcare",
						"plan_type": "HMO",
						"member_number": "654",
						"effective_date": "2021-03-10",
						"group_number": "54321",
						"bin": "",
						"pcn": ""
					},
					"PatientPharmacyInsurance": {
						"payer_name": "OptumRx",
						"payer_type": "Rx",
						"plan_bin": "135791",
						"plan_pcn": "pcn",
						"plan_group": "13579",
						"plan_id": "321",
						"plan_start_date": "2021-03-10",
						"plan_end_date": ""
					},
					"CardRequestInfo": {
						"Type": "Xolair_WEB"
					}
				},
				"response": {
					"CardResponseInfo": {
						"MemberId": "1145725530",
						"Bin": "135791",
						"Pcn": "pcn",
						"Group": "group",
						"AllowableUses": "999",
						"BenefitAmount": "18000",
						"Status": "Expired"
					},
					"TransactionInfo": {
						"TransactionId": "f4a07b01-02e0-4bf3-85a0-06d5c6bfeda8",
						"TransactionCreatedDateTime": "2023-12-17T18:08:05.941Z",
						"EnrollmentStatus": "Expired"
					}
				}
			},
			"credentials_id": "1145725530",
			"Enrollment End Date": "2023-12-31",
			"Enrollment Status Reason": "Eligibility Expired"
		},
		{
			"Member ID": "1145725528",
			"First Name": "John",
			"Last Name": "Doe",
			"Date of Birth": "2002-11-14",
			"Enrollment Status": "Pending",
			"Prior Member ID": "",
			"Gender": "Male",
			"Drug Patient": "Y",
			"Drug Indication": "Indication Drug",
			"Drug Admin Patient": "Y",
			"Drug Admin Indication": "Indication Admin",
			"Original Enrollment Date Drug": "2023-11-17",
			"Original Enrollment Date Drug Admin": "2023-11-17",
			"Current Enrollment Date Drug": "2024-01-01",
			"Current Enrollment Date Drug Admin": "2024-01-01",
			"Enrollment Source": "patient",
			"Address": "123 Main St",
			"City": "Newport",
			"State": "CA",
			"Zipcode": "11111",
			"Phone": "(123) 456-7890",
			"Email": "john.doe@example.com",
			"Database ID": 2004642,
			"Card Pii": "",
			"Eligibility Data": {
				"drug": {
					"answer_01": "yes",
					"answer_02": "yes",
					"answer_03": "1",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "CA",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				},
				"admin": {
					"answer_01": "yes",
					"answer_02": "yes",
					"answer_03": "1",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "CA",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				}
			},
			"Medicare": "",
			"patient_enrollment": {
				"original_enrollment_date": "2023-11-17",
				"enrollment_date": "2023-11-17",
				"first_name": "John",
				"last_name": "Doe",
				"date_of_birth": "2002-11-14",
				"gender": "Male",
				"request_card": "n",
				"phone": "(123) 456-7890",
				"address": {
					"address_1": "123 Main St",
					"city": "Newport",
					"state": "CA",
					"zip_code": "11111",
					"address_2": ""
				},
				"commercial_insurance": {
					"medical_insurance": {
						"name": "BCBS",
						"plan_type": "HMO",
						"member_number": "123",
						"effective_date": "2023-01-01",
						"group_number": "12345",
						"bin": "",
						"pcn": ""
					},
					"rx_insurance": {
						"name": "",
						"plan_type": "",
						"member_number": "",
						"group_number": "",
						"bin": "",
						"pcn": ""
					}
				},
				"lap": {
					"first_name": "",
					"last_name": "",
					"address": {
						"address_1": "",
						"city": "",
						"state": "",
						"zip_code": "",
						"address_2": ""
					},
					"phone": ""
				},
				"enrolled_by": "patient",
				"phone_type": "Home",
				"email": "john.doe@example.com",
				"email_opt_in": "N",
				"member_id": "1145725528"
			},
			"provider_data": {
				"primary": [
					{
						"provider_id": "500011",
						"npi": "0000000006"
					}
				],
				"secondary": [
					{
						"provider_id": "",
						"npi": ""
					}
				]
			},
			"patient_lap": {
				"first_name": "",
				"last_name": "",
				"address": {
					"address_1": "",
					"city": "",
					"state": "",
					"zip_code": "",
					"address_2": ""
				},
				"phone": ""
			},
			"patient_provider_data": {
				"primary": [
					{
						"first_name": "John",
						"npi": "0000000006",
						"last_name": "Doe",
						"phones": {
							"phone": "1234567890"
						},
						"address": {
							"address1": "123 Main St",
							"address2": "",
							"city": "Newport",
							"state": "CA",
							"zip_code": "11111"
						}
					}
				],
				"secondary": [
					{
						"practice_name": "",
						"npi": "",
						"phones": {
							"phone": ""
						},
						"address": {
							"address1": "",
							"address2": "",
							"city": "",
							"state": "",
							"zip_code": ""
						}
					}
				]
			},
			"patient_commercial_insurance": {
				"medical_insurance": {
					"name": "BCBS",
					"plan_type": "HMO",
					"member_number": "123",
					"effective_date": "2023-01-01",
					"group_number": "12345",
					"bin": "",
					"pcn": ""
				},
				"rx_insurance": {
					"name": "",
					"plan_type": "",
					"member_number": "",
					"group_number": "",
					"bin": "",
					"pcn": ""
				}
			},
			"patient_benefits_amounts": {
				"current_period": {
					"total_amount_drug": 15000,
					"total_amount_drug_admin": 1500,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1500,
					"used_amount_drug": 0,
					"used_amount_drug_admin": 0,
					"use_count_drug": 0,
					"use_count_drug_admin": 0
				},
				"prior_period": {
					"total_amount_drug": 15000,
					"total_amount_drug_admin": 1500,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1500,
					"used_amount_drug": 0,
					"used_amount_drug_admin": 0,
					"use_count_drug": 0,
					"use_count_drug_admin": 0
				}
			},
			"card_data": {},
			"verification_data": {
				"request": {
					"PatientPersonalInfo": {
						"FirstName": "John",
						"LastName": "Doe",
						"DateOfBirth": "2002-11-14",
						"Gender": "Male",
						"City": "Newport",
						"State": "CA",
						"Zipcode": "11111",
						"Email": "john.doe@example.com",
						"PhoneNumber": "(123) 456-7890"
					},
					"PatientMedicalInsurance": {
						"name": "BCBS",
						"plan_type": "HMO",
						"member_number": "123",
						"effective_date": "2023-01-01",
						"group_number": "12345",
						"bin": "",
						"pcn": ""
					},
					"PatientPharmacyInsurance": {
						"payer_name": "",
						"payer_type": "",
						"plan_bin": "",
						"plan_pcn": "",
						"plan_group": "",
						"plan_id": "",
						"plan_start_date": "",
						"plan_end_date": ""
					},
					"CardRequestInfo": {
						"Type": "Xolair_WEB"
					}
				},
				"response": {
					"CardResponseInfo": {
						"MemberId": "1145725528",
						"Bin": "123456",
						"Pcn": "pcn",
						"Group": "group",
						"AllowableUses": "999",
						"BenefitAmount": "15000",
						"Status": "Inactive"
					},
					"TransactionInfo": {
						"TransactionId": "e2f07b01-02e0-4bf3-85a0-06d5c6bfeda8",
						"TransactionCreatedDateTime": "2023-11-17T18:08:05.941Z",
						"EnrollmentStatus": "Not Determined"
					}
				}
			},
			"credentials_id": "1145725528",
			"Enrollment End Date": "2024-12-31",
			"Enrollment Status Reason": ""
		},
		{
			"Member ID": "1145725529",
			"First Name": "Jane",
			"Last Name": "Smith",
			"Date of Birth": "1988-03-22",
			"Enrollment Status": "Active",
			"Prior Member ID": "1234567890",
			"Gender": "Female",
			"Drug Patient": "N",
			"Drug Indication": "NA",
			"Drug Admin Patient": "Y",
			"Drug Admin Indication": "Indication Admin",
			"Original Enrollment Date Drug": "2022-08-01",
			"Original Enrollment Date Drug Admin": "2022-08-01",
			"Current Enrollment Date Drug": "",
			"Current Enrollment Date Drug Admin": "2024-01-01",
			"Enrollment Source": "provider",
			"Address": "456 Elm St",
			"City": "Springfield",
			"State": "IL",
			"Zipcode": "62704",
			"Phone": "(217) 555-1234",
			"Email": "jane.smith@example.com",
			"Database ID": 2004643,
			"Card Pii": "",
			"Eligibility Data": {
				"drug": {
					"answer_01": "no",
					"answer_02": "no",
					"answer_03": "0",
					"answer_04": "no",
					"answer_05": "yes",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "disagree",
					"answer_18": "disagree"
				},
				"admin": {
					"answer_01": "yes",
					"answer_02": "yes",
					"answer_03": "2",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				}
			},
			"Medicare": "",
			"patient_enrollment": {
				"original_enrollment_date": "2022-08-01",
				"enrollment_date": "2022-08-01",
				"first_name": "Jane",
				"last_name": "Smith",
				"date_of_birth": "1988-03-22",
				"gender": "Female",
				"request_card": "n",
				"phone": "(217) 555-1234",
				"address": {
					"address_1": "456 Elm St",
					"city": "Springfield",
					"state": "IL",
					"zip_code": "62704",
					"address_2": ""
				},
				"commercial_insurance": {
					"medical_insurance": {
						"name": "Aetna",
						"plan_type": "PPO",
						"member_number": "456",
						"effective_date": "2022-08-01",
						"group_number": "67890",
						"bin": "",
						"pcn": ""
					},
					"rx_insurance": {
						"name": "CVS Caremark",
						"plan_type": "Rx",
						"member_number": "789",
						"group_number": "98765",
						"bin": "987654",
						"pcn": "pcn"
					}
				},
				"lap": {
					"first_name": "",
					"last_name": "",
					"address": {
						"address_1": "",
						"city": "",
						"state": "",
						"zip_code": "",
						"address_2": ""
					},
					"phone": ""
				},
				"enrolled_by": "provider",
				"phone_type": "Mobile",
				"email": "jane.smith@example.com",
				"email_opt_in": "Y",
				"member_id": "1145725529"
			},
			"provider_data": {
				"primary": [
					{
						"provider_id": "500012",
						"npi": "0000000007"
					}
				],
				"secondary": [
					{
						"provider_id": "500013",
						"npi": "0000000008"
					}
				]
			},
			"patient_lap": {
				"first_name": "",
				"last_name": "",
				"address": {
					"address_1": "",
					"city": "",
					"state": "",
					"zip_code": "",
					"address_2": ""
				},
				"phone": ""
			},
			"patient_provider_data": {
				"primary": [
					{
						"first_name": "James",
						"npi": "0000000007",
						"last_name": "Brown",
						"phones": {
							"phone": "2175551234"
						},
						"address": {
							"address1": "456 Elm St",
							"address2": "",
							"city": "Springfield",
							"state": "IL",
							"zip_code": "62704"
						}
					}
				],
				"secondary": [
					{
						"practice_name": "Clinic 2",
						"npi": "0000000008",
						"phones": {
							"phone": "2175554321"
						},
						"address": {
							"address1": "789 Oak St",
							"address2": "",
							"city": "Springfield",
							"state": "IL",
							"zip_code": "62701"
						}
					}
				]
			},
			"patient_commercial_insurance": {
				"medical_insurance": {
					"name": "Aetna",
					"plan_type": "PPO",
					"member_number": "456",
					"effective_date": "2022-08-01",
					"group_number": "67890",
					"bin": "",
					"pcn": ""
				},
				"rx_insurance": {
					"name": "CVS Caremark",
					"plan_type": "Rx",
					"member_number": "789",
					"group_number": "98765",
					"bin": "987654",
					"pcn": "pcn"
				}
			},
			"patient_benefits_amounts": {
				"current_period": {
					"total_amount_drug": 20000,
					"total_amount_drug_admin": 2500,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1000,
					"used_amount_drug": 5000,
					"used_amount_drug_admin": 1500,
					"use_count_drug": 3,
					"use_count_drug_admin": 2
				},
				"prior_period": {
					"total_amount_drug": 20000,
					"total_amount_drug_admin": 2500,
					"balance_amount_drug": 10000,
					"balance_amount_drug_admin": 500,
					"used_amount_drug": 10000,
					"used_amount_drug_admin": 2000,
					"use_count_drug": 6,
					"use_count_drug_admin": 4
				}
			},
			"card_data": {},
			"verification_data": {
				"request": {
					"PatientPersonalInfo": {
						"FirstName": "Jane",
						"LastName": "Smith",
						"DateOfBirth": "1988-03-22",
						"Gender": "Female",
						"City": "Springfield",
						"State": "IL",
						"Zipcode": "62704",
						"Email": "jane.smith@example.com",
						"PhoneNumber": "(217) 555-1234"
					},
					"PatientMedicalInsurance": {
						"name": "Aetna",
						"plan_type": "PPO",
						"member_number": "456",
						"effective_date": "2022-08-01",
						"group_number": "67890",
						"bin": "",
						"pcn": ""
					},
					"PatientPharmacyInsurance": {
						"payer_name": "CVS Caremark",
						"payer_type": "Rx",
						"plan_bin": "987654",
						"plan_pcn": "pcn",
						"plan_group": "98765",
						"plan_id": "789",
						"plan_start_date": "2022-08-01",
						"plan_end_date": ""
					},
					"CardRequestInfo": {
						"Type": "Xolair_WEB"
					}
				},
				"response": {
					"CardResponseInfo": {
						"MemberId": "1145725529",
						"Bin": "987654",
						"Pcn": "pcn",
						"Group": "group",
						"AllowableUses": "999",
						"BenefitAmount": "20000",
						"Status": "Active"
					},
					"TransactionInfo": {
						"TransactionId": "e3f07b01-02e0-4bf3-85a0-06d5c6bfeda8",
						"TransactionCreatedDateTime": "2023-11-17T18:08:05.941Z",
						"EnrollmentStatus": "Determined"
					}
				}
			},
			"credentials_id": "1145725529",
			"Enrollment End Date": "2025-12-31",
			"Enrollment Status Reason": "Eligibility Confirmed"
		},
		{
			"Member ID": "1145725530",
			"First Name": "Alice",
			"Last Name": "Johnson",
			"Date of Birth": "1990-05-15",
			"Enrollment Status": "Expired",
			"Prior Member ID": "",
			"Gender": "Female",
			"Drug Patient": "Y",
			"Drug Indication": "Indication Drug",
			"Drug Admin Patient": "Y",
			"Drug Admin Indication": "Indication Admin",
			"Original Enrollment Date Drug": "2021-03-10",
			"Original Enrollment Date Drug Admin": "2021-03-10",
			"Current Enrollment Date Drug": "2022-03-10",
			"Current Enrollment Date Drug Admin": "2022-03-10",
			"Enrollment Source": "self",
			"Address": "789 Pine St",
			"City": "Springfield",
			"State": "IL",
			"Zipcode": "62701",
			"Phone": "(217) 555-9876",
			"Email": "alice.johnson@example.com",
			"Database ID": 3005754,
			"Card Pii": "",
			"Eligibility Data": {
				"drug": {
					"answer_01": "yes",
					"answer_02": "no",
					"answer_03": "1",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "disagree",
					"answer_18": "disagree"
				},
				"admin": {
					"answer_01": "no",
					"answer_02": "yes",
					"answer_03": "0",
					"answer_04": "no",
					"answer_05": "yes",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				}
			},
			"Medicare": "",
			"patient_enrollment": {
				"original_enrollment_date": "2021-03-10",
				"enrollment_date": "2022-03-10",
				"first_name": "Alice",
				"last_name": "Johnson",
				"date_of_birth": "1990-05-15",
				"gender": "Female",
				"request_card": "n",
				"phone": "(217) 555-9876",
				"address": {
					"address_1": "789 Pine St",
					"city": "Springfield",
					"state": "IL",
					"zip_code": "62701",
					"address_2": ""
				},
				"commercial_insurance": {
					"medical_insurance": {
						"name": "UnitedHealthcare",
						"plan_type": "HMO",
						"member_number": "654",
						"effective_date": "2021-03-10",
						"group_number": "54321",
						"bin": "",
						"pcn": ""
					},
					"rx_insurance": {
						"name": "OptumRx",
						"plan_type": "Rx",
						"member_number": "321",
						"group_number": "13579",
						"bin": "135791",
						"pcn": "pcn"
					}
				},
				"lap": {
					"first_name": "",
					"last_name": "",
					"address": {
						"address_1": "",
						"city": "",
						"state": "",
						"zip_code": "",
						"address_2": ""
					},
					"phone": ""
				},
				"enrolled_by": "self",
				"phone_type": "Home",
				"email": "alice.johnson@example.com",
				"email_opt_in": "N",
				"member_id": "1145725530"
			},
			"provider_data": {
				"primary": [
					{
						"provider_id": "500014",
						"npi": "0000000009"
					}
				],
				"secondary": []
			},
			"patient_lap": {
				"first_name": "",
				"last_name": "",
				"address": {
					"address_1": "",
					"city": "",
					"state": "",
					"zip_code": "",
					"address_2": ""
				},
				"phone": ""
			},
			"patient_provider_data": {
				"primary": [
					{
						"first_name": "Linda",
						"npi": "0000000009",
						"last_name": "White",
						"phones": {
							"phone": "2175559876"
						},
						"address": {
							"address1": "789 Pine St",
							"address2": "",
							"city": "Springfield",
							"state": "IL",
							"zip_code": "62701"
						}
					}
				],
				"secondary": []
			},
			"patient_commercial_insurance": {
				"medical_insurance": {
					"name": "UnitedHealthcare",
					"plan_type": "HMO",
					"member_number": "654",
					"effective_date": "2021-03-10",
					"group_number": "54321",
					"bin": "",
					"pcn": ""
				},
				"rx_insurance": {
					"name": "OptumRx",
					"plan_type": "Rx",
					"member_number": "321",
					"group_number": "13579",
					"bin": "135791",
					"pcn": "pcn"
				}
			},
			"patient_benefits_amounts": {
				"current_period": {
					"total_amount_drug": 18000,
					"total_amount_drug_admin": 2000,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1500,
					"used_amount_drug": 3000,
					"used_amount_drug_admin": 500,
					"use_count_drug": 1,
					"use_count_drug_admin": 1
				},
				"prior_period": {
					"total_amount_drug": 18000,
					"total_amount_drug_admin": 2000,
					"balance_amount_drug": 9000,
					"balance_amount_drug_admin": 1000,
					"used_amount_drug": 9000,
					"used_amount_drug_admin": 1000,
					"use_count_drug": 3,
					"use_count_drug_admin": 2
				}
			},
			"card_data": {},
			"verification_data": {
				"request": {
					"PatientPersonalInfo": {
						"FirstName": "Alice",
						"LastName": "Johnson",
						"DateOfBirth": "1990-05-15",
						"Gender": "Female",
						"City": "Springfield",
						"State": "IL",
						"Zipcode": "62701",
						"Email": "alice.johnson@example.com",
						"PhoneNumber": "(217) 555-9876"
					},
					"PatientMedicalInsurance": {
						"name": "UnitedHealthcare",
						"plan_type": "HMO",
						"member_number": "654",
						"effective_date": "2021-03-10",
						"group_number": "54321",
						"bin": "",
						"pcn": ""
					},
					"PatientPharmacyInsurance": {
						"payer_name": "OptumRx",
						"payer_type": "Rx",
						"plan_bin": "135791",
						"plan_pcn": "pcn",
						"plan_group": "13579",
						"plan_id": "321",
						"plan_start_date": "2021-03-10",
						"plan_end_date": ""
					},
					"CardRequestInfo": {
						"Type": "Xolair_WEB"
					}
				},
				"response": {
					"CardResponseInfo": {
						"MemberId": "1145725530",
						"Bin": "135791",
						"Pcn": "pcn",
						"Group": "group",
						"AllowableUses": "999",
						"BenefitAmount": "18000",
						"Status": "Expired"
					},
					"TransactionInfo": {
						"TransactionId": "f4a07b01-02e0-4bf3-85a0-06d5c6bfeda8",
						"TransactionCreatedDateTime": "2023-12-17T18:08:05.941Z",
						"EnrollmentStatus": "Expired"
					}
				}
			},
			"credentials_id": "1145725530",
			"Enrollment End Date": "2023-12-31",
			"Enrollment Status Reason": "Eligibility Expired"
		},
		{
			"Member ID": "1145725528",
			"First Name": "John",
			"Last Name": "Doe",
			"Date of Birth": "2002-11-14",
			"Enrollment Status": "Pending",
			"Prior Member ID": "",
			"Gender": "Male",
			"Drug Patient": "Y",
			"Drug Indication": "Indication Drug",
			"Drug Admin Patient": "Y",
			"Drug Admin Indication": "Indication Admin",
			"Original Enrollment Date Drug": "2023-11-17",
			"Original Enrollment Date Drug Admin": "2023-11-17",
			"Current Enrollment Date Drug": "2024-01-01",
			"Current Enrollment Date Drug Admin": "2024-01-01",
			"Enrollment Source": "patient",
			"Address": "123 Main St",
			"City": "Newport",
			"State": "CA",
			"Zipcode": "11111",
			"Phone": "(123) 456-7890",
			"Email": "john.doe@example.com",
			"Database ID": 2004642,
			"Card Pii": "",
			"Eligibility Data": {
				"drug": {
					"answer_01": "yes",
					"answer_02": "yes",
					"answer_03": "1",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "CA",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				},
				"admin": {
					"answer_01": "yes",
					"answer_02": "yes",
					"answer_03": "1",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "CA",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				}
			},
			"Medicare": "",
			"patient_enrollment": {
				"original_enrollment_date": "2023-11-17",
				"enrollment_date": "2023-11-17",
				"first_name": "John",
				"last_name": "Doe",
				"date_of_birth": "2002-11-14",
				"gender": "Male",
				"request_card": "n",
				"phone": "(123) 456-7890",
				"address": {
					"address_1": "123 Main St",
					"city": "Newport",
					"state": "CA",
					"zip_code": "11111",
					"address_2": ""
				},
				"commercial_insurance": {
					"medical_insurance": {
						"name": "BCBS",
						"plan_type": "HMO",
						"member_number": "123",
						"effective_date": "2023-01-01",
						"group_number": "12345",
						"bin": "",
						"pcn": ""
					},
					"rx_insurance": {
						"name": "",
						"plan_type": "",
						"member_number": "",
						"group_number": "",
						"bin": "",
						"pcn": ""
					}
				},
				"lap": {
					"first_name": "",
					"last_name": "",
					"address": {
						"address_1": "",
						"city": "",
						"state": "",
						"zip_code": "",
						"address_2": ""
					},
					"phone": ""
				},
				"enrolled_by": "patient",
				"phone_type": "Home",
				"email": "john.doe@example.com",
				"email_opt_in": "N",
				"member_id": "1145725528"
			},
			"provider_data": {
				"primary": [
					{
						"provider_id": "500011",
						"npi": "0000000006"
					}
				],
				"secondary": [
					{
						"provider_id": "",
						"npi": ""
					}
				]
			},
			"patient_lap": {
				"first_name": "",
				"last_name": "",
				"address": {
					"address_1": "",
					"city": "",
					"state": "",
					"zip_code": "",
					"address_2": ""
				},
				"phone": ""
			},
			"patient_provider_data": {
				"primary": [
					{
						"first_name": "John",
						"npi": "0000000006",
						"last_name": "Doe",
						"phones": {
							"phone": "1234567890"
						},
						"address": {
							"address1": "123 Main St",
							"address2": "",
							"city": "Newport",
							"state": "CA",
							"zip_code": "11111"
						}
					}
				],
				"secondary": [
					{
						"practice_name": "",
						"npi": "",
						"phones": {
							"phone": ""
						},
						"address": {
							"address1": "",
							"address2": "",
							"city": "",
							"state": "",
							"zip_code": ""
						}
					}
				]
			},
			"patient_commercial_insurance": {
				"medical_insurance": {
					"name": "BCBS",
					"plan_type": "HMO",
					"member_number": "123",
					"effective_date": "2023-01-01",
					"group_number": "12345",
					"bin": "",
					"pcn": ""
				},
				"rx_insurance": {
					"name": "",
					"plan_type": "",
					"member_number": "",
					"group_number": "",
					"bin": "",
					"pcn": ""
				}
			},
			"patient_benefits_amounts": {
				"current_period": {
					"total_amount_drug": 15000,
					"total_amount_drug_admin": 1500,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1500,
					"used_amount_drug": 0,
					"used_amount_drug_admin": 0,
					"use_count_drug": 0,
					"use_count_drug_admin": 0
				},
				"prior_period": {
					"total_amount_drug": 15000,
					"total_amount_drug_admin": 1500,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1500,
					"used_amount_drug": 0,
					"used_amount_drug_admin": 0,
					"use_count_drug": 0,
					"use_count_drug_admin": 0
				}
			},
			"card_data": {},
			"verification_data": {
				"request": {
					"PatientPersonalInfo": {
						"FirstName": "John",
						"LastName": "Doe",
						"DateOfBirth": "2002-11-14",
						"Gender": "Male",
						"City": "Newport",
						"State": "CA",
						"Zipcode": "11111",
						"Email": "john.doe@example.com",
						"PhoneNumber": "(123) 456-7890"
					},
					"PatientMedicalInsurance": {
						"name": "BCBS",
						"plan_type": "HMO",
						"member_number": "123",
						"effective_date": "2023-01-01",
						"group_number": "12345",
						"bin": "",
						"pcn": ""
					},
					"PatientPharmacyInsurance": {
						"payer_name": "",
						"payer_type": "",
						"plan_bin": "",
						"plan_pcn": "",
						"plan_group": "",
						"plan_id": "",
						"plan_start_date": "",
						"plan_end_date": ""
					},
					"CardRequestInfo": {
						"Type": "Xolair_WEB"
					}
				},
				"response": {
					"CardResponseInfo": {
						"MemberId": "1145725528",
						"Bin": "123456",
						"Pcn": "pcn",
						"Group": "group",
						"AllowableUses": "999",
						"BenefitAmount": "15000",
						"Status": "Inactive"
					},
					"TransactionInfo": {
						"TransactionId": "e2f07b01-02e0-4bf3-85a0-06d5c6bfeda8",
						"TransactionCreatedDateTime": "2023-11-17T18:08:05.941Z",
						"EnrollmentStatus": "Not Determined"
					}
				}
			},
			"credentials_id": "1145725528",
			"Enrollment End Date": "2024-12-31",
			"Enrollment Status Reason": ""
		},
		{
			"Member ID": "1145725529",
			"First Name": "Jane",
			"Last Name": "Smith",
			"Date of Birth": "1988-03-22",
			"Enrollment Status": "Active",
			"Prior Member ID": "1234567890",
			"Gender": "Female",
			"Drug Patient": "N",
			"Drug Indication": "NA",
			"Drug Admin Patient": "Y",
			"Drug Admin Indication": "Indication Admin",
			"Original Enrollment Date Drug": "2022-08-01",
			"Original Enrollment Date Drug Admin": "2022-08-01",
			"Current Enrollment Date Drug": "",
			"Current Enrollment Date Drug Admin": "2024-01-01",
			"Enrollment Source": "provider",
			"Address": "456 Elm St",
			"City": "Springfield",
			"State": "IL",
			"Zipcode": "62704",
			"Phone": "(217) 555-1234",
			"Email": "jane.smith@example.com",
			"Database ID": 2004643,
			"Card Pii": "",
			"Eligibility Data": {
				"drug": {
					"answer_01": "no",
					"answer_02": "no",
					"answer_03": "0",
					"answer_04": "no",
					"answer_05": "yes",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "disagree",
					"answer_18": "disagree"
				},
				"admin": {
					"answer_01": "yes",
					"answer_02": "yes",
					"answer_03": "2",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				}
			},
			"Medicare": "",
			"patient_enrollment": {
				"original_enrollment_date": "2022-08-01",
				"enrollment_date": "2022-08-01",
				"first_name": "Jane",
				"last_name": "Smith",
				"date_of_birth": "1988-03-22",
				"gender": "Female",
				"request_card": "n",
				"phone": "(217) 555-1234",
				"address": {
					"address_1": "456 Elm St",
					"city": "Springfield",
					"state": "IL",
					"zip_code": "62704",
					"address_2": ""
				},
				"commercial_insurance": {
					"medical_insurance": {
						"name": "Aetna",
						"plan_type": "PPO",
						"member_number": "456",
						"effective_date": "2022-08-01",
						"group_number": "67890",
						"bin": "",
						"pcn": ""
					},
					"rx_insurance": {
						"name": "CVS Caremark",
						"plan_type": "Rx",
						"member_number": "789",
						"group_number": "98765",
						"bin": "987654",
						"pcn": "pcn"
					}
				},
				"lap": {
					"first_name": "",
					"last_name": "",
					"address": {
						"address_1": "",
						"city": "",
						"state": "",
						"zip_code": "",
						"address_2": ""
					},
					"phone": ""
				},
				"enrolled_by": "provider",
				"phone_type": "Mobile",
				"email": "jane.smith@example.com",
				"email_opt_in": "Y",
				"member_id": "1145725529"
			},
			"provider_data": {
				"primary": [
					{
						"provider_id": "500012",
						"npi": "0000000007"
					}
				],
				"secondary": [
					{
						"provider_id": "500013",
						"npi": "0000000008"
					}
				]
			},
			"patient_lap": {
				"first_name": "",
				"last_name": "",
				"address": {
					"address_1": "",
					"city": "",
					"state": "",
					"zip_code": "",
					"address_2": ""
				},
				"phone": ""
			},
			"patient_provider_data": {
				"primary": [
					{
						"first_name": "James",
						"npi": "0000000007",
						"last_name": "Brown",
						"phones": {
							"phone": "2175551234"
						},
						"address": {
							"address1": "456 Elm St",
							"address2": "",
							"city": "Springfield",
							"state": "IL",
							"zip_code": "62704"
						}
					}
				],
				"secondary": [
					{
						"practice_name": "Clinic 2",
						"npi": "0000000008",
						"phones": {
							"phone": "2175554321"
						},
						"address": {
							"address1": "789 Oak St",
							"address2": "",
							"city": "Springfield",
							"state": "IL",
							"zip_code": "62701"
						}
					}
				]
			},
			"patient_commercial_insurance": {
				"medical_insurance": {
					"name": "Aetna",
					"plan_type": "PPO",
					"member_number": "456",
					"effective_date": "2022-08-01",
					"group_number": "67890",
					"bin": "",
					"pcn": ""
				},
				"rx_insurance": {
					"name": "CVS Caremark",
					"plan_type": "Rx",
					"member_number": "789",
					"group_number": "98765",
					"bin": "987654",
					"pcn": "pcn"
				}
			},
			"patient_benefits_amounts": {
				"current_period": {
					"total_amount_drug": 20000,
					"total_amount_drug_admin": 2500,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1000,
					"used_amount_drug": 5000,
					"used_amount_drug_admin": 1500,
					"use_count_drug": 3,
					"use_count_drug_admin": 2
				},
				"prior_period": {
					"total_amount_drug": 20000,
					"total_amount_drug_admin": 2500,
					"balance_amount_drug": 10000,
					"balance_amount_drug_admin": 500,
					"used_amount_drug": 10000,
					"used_amount_drug_admin": 2000,
					"use_count_drug": 6,
					"use_count_drug_admin": 4
				}
			},
			"card_data": {},
			"verification_data": {
				"request": {
					"PatientPersonalInfo": {
						"FirstName": "Jane",
						"LastName": "Smith",
						"DateOfBirth": "1988-03-22",
						"Gender": "Female",
						"City": "Springfield",
						"State": "IL",
						"Zipcode": "62704",
						"Email": "jane.smith@example.com",
						"PhoneNumber": "(217) 555-1234"
					},
					"PatientMedicalInsurance": {
						"name": "Aetna",
						"plan_type": "PPO",
						"member_number": "456",
						"effective_date": "2022-08-01",
						"group_number": "67890",
						"bin": "",
						"pcn": ""
					},
					"PatientPharmacyInsurance": {
						"payer_name": "CVS Caremark",
						"payer_type": "Rx",
						"plan_bin": "987654",
						"plan_pcn": "pcn",
						"plan_group": "98765",
						"plan_id": "789",
						"plan_start_date": "2022-08-01",
						"plan_end_date": ""
					},
					"CardRequestInfo": {
						"Type": "Xolair_WEB"
					}
				},
				"response": {
					"CardResponseInfo": {
						"MemberId": "1145725529",
						"Bin": "987654",
						"Pcn": "pcn",
						"Group": "group",
						"AllowableUses": "999",
						"BenefitAmount": "20000",
						"Status": "Active"
					},
					"TransactionInfo": {
						"TransactionId": "e3f07b01-02e0-4bf3-85a0-06d5c6bfeda8",
						"TransactionCreatedDateTime": "2023-11-17T18:08:05.941Z",
						"EnrollmentStatus": "Determined"
					}
				}
			},
			"credentials_id": "1145725529",
			"Enrollment End Date": "2025-12-31",
			"Enrollment Status Reason": "Eligibility Confirmed"
		},
		{
			"Member ID": "1145725530",
			"First Name": "Alice",
			"Last Name": "Johnson",
			"Date of Birth": "1990-05-15",
			"Enrollment Status": "Expired",
			"Prior Member ID": "",
			"Gender": "Female",
			"Drug Patient": "Y",
			"Drug Indication": "Indication Drug",
			"Drug Admin Patient": "Y",
			"Drug Admin Indication": "Indication Admin",
			"Original Enrollment Date Drug": "2021-03-10",
			"Original Enrollment Date Drug Admin": "2021-03-10",
			"Current Enrollment Date Drug": "2022-03-10",
			"Current Enrollment Date Drug Admin": "2022-03-10",
			"Enrollment Source": "self",
			"Address": "789 Pine St",
			"City": "Springfield",
			"State": "IL",
			"Zipcode": "62701",
			"Phone": "(217) 555-9876",
			"Email": "alice.johnson@example.com",
			"Database ID": 3005754,
			"Card Pii": "",
			"Eligibility Data": {
				"drug": {
					"answer_01": "yes",
					"answer_02": "no",
					"answer_03": "1",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "disagree",
					"answer_18": "disagree"
				},
				"admin": {
					"answer_01": "no",
					"answer_02": "yes",
					"answer_03": "0",
					"answer_04": "no",
					"answer_05": "yes",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				}
			},
			"Medicare": "",
			"patient_enrollment": {
				"original_enrollment_date": "2021-03-10",
				"enrollment_date": "2022-03-10",
				"first_name": "Alice",
				"last_name": "Johnson",
				"date_of_birth": "1990-05-15",
				"gender": "Female",
				"request_card": "n",
				"phone": "(217) 555-9876",
				"address": {
					"address_1": "789 Pine St",
					"city": "Springfield",
					"state": "IL",
					"zip_code": "62701",
					"address_2": ""
				},
				"commercial_insurance": {
					"medical_insurance": {
						"name": "UnitedHealthcare",
						"plan_type": "HMO",
						"member_number": "654",
						"effective_date": "2021-03-10",
						"group_number": "54321",
						"bin": "",
						"pcn": ""
					},
					"rx_insurance": {
						"name": "OptumRx",
						"plan_type": "Rx",
						"member_number": "321",
						"group_number": "13579",
						"bin": "135791",
						"pcn": "pcn"
					}
				},
				"lap": {
					"first_name": "",
					"last_name": "",
					"address": {
						"address_1": "",
						"city": "",
						"state": "",
						"zip_code": "",
						"address_2": ""
					},
					"phone": ""
				},
				"enrolled_by": "self",
				"phone_type": "Home",
				"email": "alice.johnson@example.com",
				"email_opt_in": "N",
				"member_id": "1145725530"
			},
			"provider_data": {
				"primary": [
					{
						"provider_id": "500014",
						"npi": "0000000009"
					}
				],
				"secondary": []
			},
			"patient_lap": {
				"first_name": "",
				"last_name": "",
				"address": {
					"address_1": "",
					"city": "",
					"state": "",
					"zip_code": "",
					"address_2": ""
				},
				"phone": ""
			},
			"patient_provider_data": {
				"primary": [
					{
						"first_name": "Linda",
						"npi": "0000000009",
						"last_name": "White",
						"phones": {
							"phone": "2175559876"
						},
						"address": {
							"address1": "789 Pine St",
							"address2": "",
							"city": "Springfield",
							"state": "IL",
							"zip_code": "62701"
						}
					}
				],
				"secondary": []
			},
			"patient_commercial_insurance": {
				"medical_insurance": {
					"name": "UnitedHealthcare",
					"plan_type": "HMO",
					"member_number": "654",
					"effective_date": "2021-03-10",
					"group_number": "54321",
					"bin": "",
					"pcn": ""
				},
				"rx_insurance": {
					"name": "OptumRx",
					"plan_type": "Rx",
					"member_number": "321",
					"group_number": "13579",
					"bin": "135791",
					"pcn": "pcn"
				}
			},
			"patient_benefits_amounts": {
				"current_period": {
					"total_amount_drug": 18000,
					"total_amount_drug_admin": 2000,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1500,
					"used_amount_drug": 3000,
					"used_amount_drug_admin": 500,
					"use_count_drug": 1,
					"use_count_drug_admin": 1
				},
				"prior_period": {
					"total_amount_drug": 18000,
					"total_amount_drug_admin": 2000,
					"balance_amount_drug": 9000,
					"balance_amount_drug_admin": 1000,
					"used_amount_drug": 9000,
					"used_amount_drug_admin": 1000,
					"use_count_drug": 3,
					"use_count_drug_admin": 2
				}
			},
			"card_data": {},
			"verification_data": {
				"request": {
					"PatientPersonalInfo": {
						"FirstName": "Alice",
						"LastName": "Johnson",
						"DateOfBirth": "1990-05-15",
						"Gender": "Female",
						"City": "Springfield",
						"State": "IL",
						"Zipcode": "62701",
						"Email": "alice.johnson@example.com",
						"PhoneNumber": "(217) 555-9876"
					},
					"PatientMedicalInsurance": {
						"name": "UnitedHealthcare",
						"plan_type": "HMO",
						"member_number": "654",
						"effective_date": "2021-03-10",
						"group_number": "54321",
						"bin": "",
						"pcn": ""
					},
					"PatientPharmacyInsurance": {
						"payer_name": "OptumRx",
						"payer_type": "Rx",
						"plan_bin": "135791",
						"plan_pcn": "pcn",
						"plan_group": "13579",
						"plan_id": "321",
						"plan_start_date": "2021-03-10",
						"plan_end_date": ""
					},
					"CardRequestInfo": {
						"Type": "Xolair_WEB"
					}
				},
				"response": {
					"CardResponseInfo": {
						"MemberId": "1145725530",
						"Bin": "135791",
						"Pcn": "pcn",
						"Group": "group",
						"AllowableUses": "999",
						"BenefitAmount": "18000",
						"Status": "Expired"
					},
					"TransactionInfo": {
						"TransactionId": "f4a07b01-02e0-4bf3-85a0-06d5c6bfeda8",
						"TransactionCreatedDateTime": "2023-12-17T18:08:05.941Z",
						"EnrollmentStatus": "Expired"
					}
				}
			},
			"credentials_id": "1145725530",
			"Enrollment End Date": "2023-12-31",
			"Enrollment Status Reason": "Eligibility Expired"
		},
		{
			"Member ID": "1145725528",
			"First Name": "John",
			"Last Name": "Doe",
			"Date of Birth": "2002-11-14",
			"Enrollment Status": "Pending",
			"Prior Member ID": "",
			"Gender": "Male",
			"Drug Patient": "Y",
			"Drug Indication": "Indication Drug",
			"Drug Admin Patient": "Y",
			"Drug Admin Indication": "Indication Admin",
			"Original Enrollment Date Drug": "2023-11-17",
			"Original Enrollment Date Drug Admin": "2023-11-17",
			"Current Enrollment Date Drug": "2024-01-01",
			"Current Enrollment Date Drug Admin": "2024-01-01",
			"Enrollment Source": "patient",
			"Address": "123 Main St",
			"City": "Newport",
			"State": "CA",
			"Zipcode": "11111",
			"Phone": "(123) 456-7890",
			"Email": "john.doe@example.com",
			"Database ID": 2004642,
			"Card Pii": "",
			"Eligibility Data": {
				"drug": {
					"answer_01": "yes",
					"answer_02": "yes",
					"answer_03": "1",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "CA",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				},
				"admin": {
					"answer_01": "yes",
					"answer_02": "yes",
					"answer_03": "1",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "CA",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				}
			},
			"Medicare": "",
			"patient_enrollment": {
				"original_enrollment_date": "2023-11-17",
				"enrollment_date": "2023-11-17",
				"first_name": "John",
				"last_name": "Doe",
				"date_of_birth": "2002-11-14",
				"gender": "Male",
				"request_card": "n",
				"phone": "(123) 456-7890",
				"address": {
					"address_1": "123 Main St",
					"city": "Newport",
					"state": "CA",
					"zip_code": "11111",
					"address_2": ""
				},
				"commercial_insurance": {
					"medical_insurance": {
						"name": "BCBS",
						"plan_type": "HMO",
						"member_number": "123",
						"effective_date": "2023-01-01",
						"group_number": "12345",
						"bin": "",
						"pcn": ""
					},
					"rx_insurance": {
						"name": "",
						"plan_type": "",
						"member_number": "",
						"group_number": "",
						"bin": "",
						"pcn": ""
					}
				},
				"lap": {
					"first_name": "",
					"last_name": "",
					"address": {
						"address_1": "",
						"city": "",
						"state": "",
						"zip_code": "",
						"address_2": ""
					},
					"phone": ""
				},
				"enrolled_by": "patient",
				"phone_type": "Home",
				"email": "john.doe@example.com",
				"email_opt_in": "N",
				"member_id": "1145725528"
			},
			"provider_data": {
				"primary": [
					{
						"provider_id": "500011",
						"npi": "0000000006"
					}
				],
				"secondary": [
					{
						"provider_id": "",
						"npi": ""
					}
				]
			},
			"patient_lap": {
				"first_name": "",
				"last_name": "",
				"address": {
					"address_1": "",
					"city": "",
					"state": "",
					"zip_code": "",
					"address_2": ""
				},
				"phone": ""
			},
			"patient_provider_data": {
				"primary": [
					{
						"first_name": "John",
						"npi": "0000000006",
						"last_name": "Doe",
						"phones": {
							"phone": "1234567890"
						},
						"address": {
							"address1": "123 Main St",
							"address2": "",
							"city": "Newport",
							"state": "CA",
							"zip_code": "11111"
						}
					}
				],
				"secondary": [
					{
						"practice_name": "",
						"npi": "",
						"phones": {
							"phone": ""
						},
						"address": {
							"address1": "",
							"address2": "",
							"city": "",
							"state": "",
							"zip_code": ""
						}
					}
				]
			},
			"patient_commercial_insurance": {
				"medical_insurance": {
					"name": "BCBS",
					"plan_type": "HMO",
					"member_number": "123",
					"effective_date": "2023-01-01",
					"group_number": "12345",
					"bin": "",
					"pcn": ""
				},
				"rx_insurance": {
					"name": "",
					"plan_type": "",
					"member_number": "",
					"group_number": "",
					"bin": "",
					"pcn": ""
				}
			},
			"patient_benefits_amounts": {
				"current_period": {
					"total_amount_drug": 15000,
					"total_amount_drug_admin": 1500,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1500,
					"used_amount_drug": 0,
					"used_amount_drug_admin": 0,
					"use_count_drug": 0,
					"use_count_drug_admin": 0
				},
				"prior_period": {
					"total_amount_drug": 15000,
					"total_amount_drug_admin": 1500,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1500,
					"used_amount_drug": 0,
					"used_amount_drug_admin": 0,
					"use_count_drug": 0,
					"use_count_drug_admin": 0
				}
			},
			"card_data": {},
			"verification_data": {
				"request": {
					"PatientPersonalInfo": {
						"FirstName": "John",
						"LastName": "Doe",
						"DateOfBirth": "2002-11-14",
						"Gender": "Male",
						"City": "Newport",
						"State": "CA",
						"Zipcode": "11111",
						"Email": "john.doe@example.com",
						"PhoneNumber": "(123) 456-7890"
					},
					"PatientMedicalInsurance": {
						"name": "BCBS",
						"plan_type": "HMO",
						"member_number": "123",
						"effective_date": "2023-01-01",
						"group_number": "12345",
						"bin": "",
						"pcn": ""
					},
					"PatientPharmacyInsurance": {
						"payer_name": "",
						"payer_type": "",
						"plan_bin": "",
						"plan_pcn": "",
						"plan_group": "",
						"plan_id": "",
						"plan_start_date": "",
						"plan_end_date": ""
					},
					"CardRequestInfo": {
						"Type": "Xolair_WEB"
					}
				},
				"response": {
					"CardResponseInfo": {
						"MemberId": "1145725528",
						"Bin": "123456",
						"Pcn": "pcn",
						"Group": "group",
						"AllowableUses": "999",
						"BenefitAmount": "15000",
						"Status": "Inactive"
					},
					"TransactionInfo": {
						"TransactionId": "e2f07b01-02e0-4bf3-85a0-06d5c6bfeda8",
						"TransactionCreatedDateTime": "2023-11-17T18:08:05.941Z",
						"EnrollmentStatus": "Not Determined"
					}
				}
			},
			"credentials_id": "1145725528",
			"Enrollment End Date": "2024-12-31",
			"Enrollment Status Reason": ""
		},
		{
			"Member ID": "1145725529",
			"First Name": "Jane",
			"Last Name": "Smith",
			"Date of Birth": "1988-03-22",
			"Enrollment Status": "Active",
			"Prior Member ID": "1234567890",
			"Gender": "Female",
			"Drug Patient": "N",
			"Drug Indication": "NA",
			"Drug Admin Patient": "Y",
			"Drug Admin Indication": "Indication Admin",
			"Original Enrollment Date Drug": "2022-08-01",
			"Original Enrollment Date Drug Admin": "2022-08-01",
			"Current Enrollment Date Drug": "",
			"Current Enrollment Date Drug Admin": "2024-01-01",
			"Enrollment Source": "provider",
			"Address": "456 Elm St",
			"City": "Springfield",
			"State": "IL",
			"Zipcode": "62704",
			"Phone": "(217) 555-1234",
			"Email": "jane.smith@example.com",
			"Database ID": 2004643,
			"Card Pii": "",
			"Eligibility Data": {
				"drug": {
					"answer_01": "no",
					"answer_02": "no",
					"answer_03": "0",
					"answer_04": "no",
					"answer_05": "yes",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "disagree",
					"answer_18": "disagree"
				},
				"admin": {
					"answer_01": "yes",
					"answer_02": "yes",
					"answer_03": "2",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				}
			},
			"Medicare": "",
			"patient_enrollment": {
				"original_enrollment_date": "2022-08-01",
				"enrollment_date": "2022-08-01",
				"first_name": "Jane",
				"last_name": "Smith",
				"date_of_birth": "1988-03-22",
				"gender": "Female",
				"request_card": "n",
				"phone": "(217) 555-1234",
				"address": {
					"address_1": "456 Elm St",
					"city": "Springfield",
					"state": "IL",
					"zip_code": "62704",
					"address_2": ""
				},
				"commercial_insurance": {
					"medical_insurance": {
						"name": "Aetna",
						"plan_type": "PPO",
						"member_number": "456",
						"effective_date": "2022-08-01",
						"group_number": "67890",
						"bin": "",
						"pcn": ""
					},
					"rx_insurance": {
						"name": "CVS Caremark",
						"plan_type": "Rx",
						"member_number": "789",
						"group_number": "98765",
						"bin": "987654",
						"pcn": "pcn"
					}
				},
				"lap": {
					"first_name": "",
					"last_name": "",
					"address": {
						"address_1": "",
						"city": "",
						"state": "",
						"zip_code": "",
						"address_2": ""
					},
					"phone": ""
				},
				"enrolled_by": "provider",
				"phone_type": "Mobile",
				"email": "jane.smith@example.com",
				"email_opt_in": "Y",
				"member_id": "1145725529"
			},
			"provider_data": {
				"primary": [
					{
						"provider_id": "500012",
						"npi": "0000000007"
					}
				],
				"secondary": [
					{
						"provider_id": "500013",
						"npi": "0000000008"
					}
				]
			},
			"patient_lap": {
				"first_name": "",
				"last_name": "",
				"address": {
					"address_1": "",
					"city": "",
					"state": "",
					"zip_code": "",
					"address_2": ""
				},
				"phone": ""
			},
			"patient_provider_data": {
				"primary": [
					{
						"first_name": "James",
						"npi": "0000000007",
						"last_name": "Brown",
						"phones": {
							"phone": "2175551234"
						},
						"address": {
							"address1": "456 Elm St",
							"address2": "",
							"city": "Springfield",
							"state": "IL",
							"zip_code": "62704"
						}
					}
				],
				"secondary": [
					{
						"practice_name": "Clinic 2",
						"npi": "0000000008",
						"phones": {
							"phone": "2175554321"
						},
						"address": {
							"address1": "789 Oak St",
							"address2": "",
							"city": "Springfield",
							"state": "IL",
							"zip_code": "62701"
						}
					}
				]
			},
			"patient_commercial_insurance": {
				"medical_insurance": {
					"name": "Aetna",
					"plan_type": "PPO",
					"member_number": "456",
					"effective_date": "2022-08-01",
					"group_number": "67890",
					"bin": "",
					"pcn": ""
				},
				"rx_insurance": {
					"name": "CVS Caremark",
					"plan_type": "Rx",
					"member_number": "789",
					"group_number": "98765",
					"bin": "987654",
					"pcn": "pcn"
				}
			},
			"patient_benefits_amounts": {
				"current_period": {
					"total_amount_drug": 20000,
					"total_amount_drug_admin": 2500,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1000,
					"used_amount_drug": 5000,
					"used_amount_drug_admin": 1500,
					"use_count_drug": 3,
					"use_count_drug_admin": 2
				},
				"prior_period": {
					"total_amount_drug": 20000,
					"total_amount_drug_admin": 2500,
					"balance_amount_drug": 10000,
					"balance_amount_drug_admin": 500,
					"used_amount_drug": 10000,
					"used_amount_drug_admin": 2000,
					"use_count_drug": 6,
					"use_count_drug_admin": 4
				}
			},
			"card_data": {},
			"verification_data": {
				"request": {
					"PatientPersonalInfo": {
						"FirstName": "Jane",
						"LastName": "Smith",
						"DateOfBirth": "1988-03-22",
						"Gender": "Female",
						"City": "Springfield",
						"State": "IL",
						"Zipcode": "62704",
						"Email": "jane.smith@example.com",
						"PhoneNumber": "(217) 555-1234"
					},
					"PatientMedicalInsurance": {
						"name": "Aetna",
						"plan_type": "PPO",
						"member_number": "456",
						"effective_date": "2022-08-01",
						"group_number": "67890",
						"bin": "",
						"pcn": ""
					},
					"PatientPharmacyInsurance": {
						"payer_name": "CVS Caremark",
						"payer_type": "Rx",
						"plan_bin": "987654",
						"plan_pcn": "pcn",
						"plan_group": "98765",
						"plan_id": "789",
						"plan_start_date": "2022-08-01",
						"plan_end_date": ""
					},
					"CardRequestInfo": {
						"Type": "Xolair_WEB"
					}
				},
				"response": {
					"CardResponseInfo": {
						"MemberId": "1145725529",
						"Bin": "987654",
						"Pcn": "pcn",
						"Group": "group",
						"AllowableUses": "999",
						"BenefitAmount": "20000",
						"Status": "Active"
					},
					"TransactionInfo": {
						"TransactionId": "e3f07b01-02e0-4bf3-85a0-06d5c6bfeda8",
						"TransactionCreatedDateTime": "2023-11-17T18:08:05.941Z",
						"EnrollmentStatus": "Determined"
					}
				}
			},
			"credentials_id": "1145725529",
			"Enrollment End Date": "2025-12-31",
			"Enrollment Status Reason": "Eligibility Confirmed"
		},
		{
			"Member ID": "1145725530",
			"First Name": "Alice",
			"Last Name": "Johnson",
			"Date of Birth": "1990-05-15",
			"Enrollment Status": "Expired",
			"Prior Member ID": "",
			"Gender": "Female",
			"Drug Patient": "Y",
			"Drug Indication": "Indication Drug",
			"Drug Admin Patient": "Y",
			"Drug Admin Indication": "Indication Admin",
			"Original Enrollment Date Drug": "2021-03-10",
			"Original Enrollment Date Drug Admin": "2021-03-10",
			"Current Enrollment Date Drug": "2022-03-10",
			"Current Enrollment Date Drug Admin": "2022-03-10",
			"Enrollment Source": "self",
			"Address": "789 Pine St",
			"City": "Springfield",
			"State": "IL",
			"Zipcode": "62701",
			"Phone": "(217) 555-9876",
			"Email": "alice.johnson@example.com",
			"Database ID": 3005754,
			"Card Pii": "",
			"Eligibility Data": {
				"drug": {
					"answer_01": "yes",
					"answer_02": "no",
					"answer_03": "1",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "disagree",
					"answer_18": "disagree"
				},
				"admin": {
					"answer_01": "no",
					"answer_02": "yes",
					"answer_03": "0",
					"answer_04": "no",
					"answer_05": "yes",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				}
			},
			"Medicare": "",
			"patient_enrollment": {
				"original_enrollment_date": "2021-03-10",
				"enrollment_date": "2022-03-10",
				"first_name": "Alice",
				"last_name": "Johnson",
				"date_of_birth": "1990-05-15",
				"gender": "Female",
				"request_card": "n",
				"phone": "(217) 555-9876",
				"address": {
					"address_1": "789 Pine St",
					"city": "Springfield",
					"state": "IL",
					"zip_code": "62701",
					"address_2": ""
				},
				"commercial_insurance": {
					"medical_insurance": {
						"name": "UnitedHealthcare",
						"plan_type": "HMO",
						"member_number": "654",
						"effective_date": "2021-03-10",
						"group_number": "54321",
						"bin": "",
						"pcn": ""
					},
					"rx_insurance": {
						"name": "OptumRx",
						"plan_type": "Rx",
						"member_number": "321",
						"group_number": "13579",
						"bin": "135791",
						"pcn": "pcn"
					}
				},
				"lap": {
					"first_name": "",
					"last_name": "",
					"address": {
						"address_1": "",
						"city": "",
						"state": "",
						"zip_code": "",
						"address_2": ""
					},
					"phone": ""
				},
				"enrolled_by": "self",
				"phone_type": "Home",
				"email": "alice.johnson@example.com",
				"email_opt_in": "N",
				"member_id": "1145725530"
			},
			"provider_data": {
				"primary": [
					{
						"provider_id": "500014",
						"npi": "0000000009"
					}
				],
				"secondary": []
			},
			"patient_lap": {
				"first_name": "",
				"last_name": "",
				"address": {
					"address_1": "",
					"city": "",
					"state": "",
					"zip_code": "",
					"address_2": ""
				},
				"phone": ""
			},
			"patient_provider_data": {
				"primary": [
					{
						"first_name": "Linda",
						"npi": "0000000009",
						"last_name": "White",
						"phones": {
							"phone": "2175559876"
						},
						"address": {
							"address1": "789 Pine St",
							"address2": "",
							"city": "Springfield",
							"state": "IL",
							"zip_code": "62701"
						}
					}
				],
				"secondary": []
			},
			"patient_commercial_insurance": {
				"medical_insurance": {
					"name": "UnitedHealthcare",
					"plan_type": "HMO",
					"member_number": "654",
					"effective_date": "2021-03-10",
					"group_number": "54321",
					"bin": "",
					"pcn": ""
				},
				"rx_insurance": {
					"name": "OptumRx",
					"plan_type": "Rx",
					"member_number": "321",
					"group_number": "13579",
					"bin": "135791",
					"pcn": "pcn"
				}
			},
			"patient_benefits_amounts": {
				"current_period": {
					"total_amount_drug": 18000,
					"total_amount_drug_admin": 2000,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1500,
					"used_amount_drug": 3000,
					"used_amount_drug_admin": 500,
					"use_count_drug": 1,
					"use_count_drug_admin": 1
				},
				"prior_period": {
					"total_amount_drug": 18000,
					"total_amount_drug_admin": 2000,
					"balance_amount_drug": 9000,
					"balance_amount_drug_admin": 1000,
					"used_amount_drug": 9000,
					"used_amount_drug_admin": 1000,
					"use_count_drug": 3,
					"use_count_drug_admin": 2
				}
			},
			"card_data": {},
			"verification_data": {
				"request": {
					"PatientPersonalInfo": {
						"FirstName": "Alice",
						"LastName": "Johnson",
						"DateOfBirth": "1990-05-15",
						"Gender": "Female",
						"City": "Springfield",
						"State": "IL",
						"Zipcode": "62701",
						"Email": "alice.johnson@example.com",
						"PhoneNumber": "(217) 555-9876"
					},
					"PatientMedicalInsurance": {
						"name": "UnitedHealthcare",
						"plan_type": "HMO",
						"member_number": "654",
						"effective_date": "2021-03-10",
						"group_number": "54321",
						"bin": "",
						"pcn": ""
					},
					"PatientPharmacyInsurance": {
						"payer_name": "OptumRx",
						"payer_type": "Rx",
						"plan_bin": "135791",
						"plan_pcn": "pcn",
						"plan_group": "13579",
						"plan_id": "321",
						"plan_start_date": "2021-03-10",
						"plan_end_date": ""
					},
					"CardRequestInfo": {
						"Type": "Xolair_WEB"
					}
				},
				"response": {
					"CardResponseInfo": {
						"MemberId": "1145725530",
						"Bin": "135791",
						"Pcn": "pcn",
						"Group": "group",
						"AllowableUses": "999",
						"BenefitAmount": "18000",
						"Status": "Expired"
					},
					"TransactionInfo": {
						"TransactionId": "f4a07b01-02e0-4bf3-85a0-06d5c6bfeda8",
						"TransactionCreatedDateTime": "2023-12-17T18:08:05.941Z",
						"EnrollmentStatus": "Expired"
					}
				}
			},
			"credentials_id": "1145725530",
			"Enrollment End Date": "2023-12-31",
			"Enrollment Status Reason": "Eligibility Expired"
		},
		{
			"Member ID": "1145725528",
			"First Name": "John",
			"Last Name": "Doe",
			"Date of Birth": "2002-11-14",
			"Enrollment Status": "Pending",
			"Prior Member ID": "",
			"Gender": "Male",
			"Drug Patient": "Y",
			"Drug Indication": "Indication Drug",
			"Drug Admin Patient": "Y",
			"Drug Admin Indication": "Indication Admin",
			"Original Enrollment Date Drug": "2023-11-17",
			"Original Enrollment Date Drug Admin": "2023-11-17",
			"Current Enrollment Date Drug": "2024-01-01",
			"Current Enrollment Date Drug Admin": "2024-01-01",
			"Enrollment Source": "patient",
			"Address": "123 Main St",
			"City": "Newport",
			"State": "CA",
			"Zipcode": "11111",
			"Phone": "(123) 456-7890",
			"Email": "john.doe@example.com",
			"Database ID": 2004642,
			"Card Pii": "",
			"Eligibility Data": {
				"drug": {
					"answer_01": "yes",
					"answer_02": "yes",
					"answer_03": "1",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "CA",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				},
				"admin": {
					"answer_01": "yes",
					"answer_02": "yes",
					"answer_03": "1",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "CA",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				}
			},
			"Medicare": "",
			"patient_enrollment": {
				"original_enrollment_date": "2023-11-17",
				"enrollment_date": "2023-11-17",
				"first_name": "John",
				"last_name": "Doe",
				"date_of_birth": "2002-11-14",
				"gender": "Male",
				"request_card": "n",
				"phone": "(123) 456-7890",
				"address": {
					"address_1": "123 Main St",
					"city": "Newport",
					"state": "CA",
					"zip_code": "11111",
					"address_2": ""
				},
				"commercial_insurance": {
					"medical_insurance": {
						"name": "BCBS",
						"plan_type": "HMO",
						"member_number": "123",
						"effective_date": "2023-01-01",
						"group_number": "12345",
						"bin": "",
						"pcn": ""
					},
					"rx_insurance": {
						"name": "",
						"plan_type": "",
						"member_number": "",
						"group_number": "",
						"bin": "",
						"pcn": ""
					}
				},
				"lap": {
					"first_name": "",
					"last_name": "",
					"address": {
						"address_1": "",
						"city": "",
						"state": "",
						"zip_code": "",
						"address_2": ""
					},
					"phone": ""
				},
				"enrolled_by": "patient",
				"phone_type": "Home",
				"email": "john.doe@example.com",
				"email_opt_in": "N",
				"member_id": "1145725528"
			},
			"provider_data": {
				"primary": [
					{
						"provider_id": "500011",
						"npi": "0000000006"
					}
				],
				"secondary": [
					{
						"provider_id": "",
						"npi": ""
					}
				]
			},
			"patient_lap": {
				"first_name": "",
				"last_name": "",
				"address": {
					"address_1": "",
					"city": "",
					"state": "",
					"zip_code": "",
					"address_2": ""
				},
				"phone": ""
			},
			"patient_provider_data": {
				"primary": [
					{
						"first_name": "John",
						"npi": "0000000006",
						"last_name": "Doe",
						"phones": {
							"phone": "1234567890"
						},
						"address": {
							"address1": "123 Main St",
							"address2": "",
							"city": "Newport",
							"state": "CA",
							"zip_code": "11111"
						}
					}
				],
				"secondary": [
					{
						"practice_name": "",
						"npi": "",
						"phones": {
							"phone": ""
						},
						"address": {
							"address1": "",
							"address2": "",
							"city": "",
							"state": "",
							"zip_code": ""
						}
					}
				]
			},
			"patient_commercial_insurance": {
				"medical_insurance": {
					"name": "BCBS",
					"plan_type": "HMO",
					"member_number": "123",
					"effective_date": "2023-01-01",
					"group_number": "12345",
					"bin": "",
					"pcn": ""
				},
				"rx_insurance": {
					"name": "",
					"plan_type": "",
					"member_number": "",
					"group_number": "",
					"bin": "",
					"pcn": ""
				}
			},
			"patient_benefits_amounts": {
				"current_period": {
					"total_amount_drug": 15000,
					"total_amount_drug_admin": 1500,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1500,
					"used_amount_drug": 0,
					"used_amount_drug_admin": 0,
					"use_count_drug": 0,
					"use_count_drug_admin": 0
				},
				"prior_period": {
					"total_amount_drug": 15000,
					"total_amount_drug_admin": 1500,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1500,
					"used_amount_drug": 0,
					"used_amount_drug_admin": 0,
					"use_count_drug": 0,
					"use_count_drug_admin": 0
				}
			},
			"card_data": {},
			"verification_data": {
				"request": {
					"PatientPersonalInfo": {
						"FirstName": "John",
						"LastName": "Doe",
						"DateOfBirth": "2002-11-14",
						"Gender": "Male",
						"City": "Newport",
						"State": "CA",
						"Zipcode": "11111",
						"Email": "john.doe@example.com",
						"PhoneNumber": "(123) 456-7890"
					},
					"PatientMedicalInsurance": {
						"name": "BCBS",
						"plan_type": "HMO",
						"member_number": "123",
						"effective_date": "2023-01-01",
						"group_number": "12345",
						"bin": "",
						"pcn": ""
					},
					"PatientPharmacyInsurance": {
						"payer_name": "",
						"payer_type": "",
						"plan_bin": "",
						"plan_pcn": "",
						"plan_group": "",
						"plan_id": "",
						"plan_start_date": "",
						"plan_end_date": ""
					},
					"CardRequestInfo": {
						"Type": "Xolair_WEB"
					}
				},
				"response": {
					"CardResponseInfo": {
						"MemberId": "1145725528",
						"Bin": "123456",
						"Pcn": "pcn",
						"Group": "group",
						"AllowableUses": "999",
						"BenefitAmount": "15000",
						"Status": "Inactive"
					},
					"TransactionInfo": {
						"TransactionId": "e2f07b01-02e0-4bf3-85a0-06d5c6bfeda8",
						"TransactionCreatedDateTime": "2023-11-17T18:08:05.941Z",
						"EnrollmentStatus": "Not Determined"
					}
				}
			},
			"credentials_id": "1145725528",
			"Enrollment End Date": "2024-12-31",
			"Enrollment Status Reason": ""
		},
		{
			"Member ID": "1145725529",
			"First Name": "Jane",
			"Last Name": "Smith",
			"Date of Birth": "1988-03-22",
			"Enrollment Status": "Active",
			"Prior Member ID": "1234567890",
			"Gender": "Female",
			"Drug Patient": "N",
			"Drug Indication": "NA",
			"Drug Admin Patient": "Y",
			"Drug Admin Indication": "Indication Admin",
			"Original Enrollment Date Drug": "2022-08-01",
			"Original Enrollment Date Drug Admin": "2022-08-01",
			"Current Enrollment Date Drug": "",
			"Current Enrollment Date Drug Admin": "2024-01-01",
			"Enrollment Source": "provider",
			"Address": "456 Elm St",
			"City": "Springfield",
			"State": "IL",
			"Zipcode": "62704",
			"Phone": "(217) 555-1234",
			"Email": "jane.smith@example.com",
			"Database ID": 2004643,
			"Card Pii": "",
			"Eligibility Data": {
				"drug": {
					"answer_01": "no",
					"answer_02": "no",
					"answer_03": "0",
					"answer_04": "no",
					"answer_05": "yes",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "disagree",
					"answer_18": "disagree"
				},
				"admin": {
					"answer_01": "yes",
					"answer_02": "yes",
					"answer_03": "2",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				}
			},
			"Medicare": "",
			"patient_enrollment": {
				"original_enrollment_date": "2022-08-01",
				"enrollment_date": "2022-08-01",
				"first_name": "Jane",
				"last_name": "Smith",
				"date_of_birth": "1988-03-22",
				"gender": "Female",
				"request_card": "n",
				"phone": "(217) 555-1234",
				"address": {
					"address_1": "456 Elm St",
					"city": "Springfield",
					"state": "IL",
					"zip_code": "62704",
					"address_2": ""
				},
				"commercial_insurance": {
					"medical_insurance": {
						"name": "Aetna",
						"plan_type": "PPO",
						"member_number": "456",
						"effective_date": "2022-08-01",
						"group_number": "67890",
						"bin": "",
						"pcn": ""
					},
					"rx_insurance": {
						"name": "CVS Caremark",
						"plan_type": "Rx",
						"member_number": "789",
						"group_number": "98765",
						"bin": "987654",
						"pcn": "pcn"
					}
				},
				"lap": {
					"first_name": "",
					"last_name": "",
					"address": {
						"address_1": "",
						"city": "",
						"state": "",
						"zip_code": "",
						"address_2": ""
					},
					"phone": ""
				},
				"enrolled_by": "provider",
				"phone_type": "Mobile",
				"email": "jane.smith@example.com",
				"email_opt_in": "Y",
				"member_id": "1145725529"
			},
			"provider_data": {
				"primary": [
					{
						"provider_id": "500012",
						"npi": "0000000007"
					}
				],
				"secondary": [
					{
						"provider_id": "500013",
						"npi": "0000000008"
					}
				]
			},
			"patient_lap": {
				"first_name": "",
				"last_name": "",
				"address": {
					"address_1": "",
					"city": "",
					"state": "",
					"zip_code": "",
					"address_2": ""
				},
				"phone": ""
			},
			"patient_provider_data": {
				"primary": [
					{
						"first_name": "James",
						"npi": "0000000007",
						"last_name": "Brown",
						"phones": {
							"phone": "2175551234"
						},
						"address": {
							"address1": "456 Elm St",
							"address2": "",
							"city": "Springfield",
							"state": "IL",
							"zip_code": "62704"
						}
					}
				],
				"secondary": [
					{
						"practice_name": "Clinic 2",
						"npi": "0000000008",
						"phones": {
							"phone": "2175554321"
						},
						"address": {
							"address1": "789 Oak St",
							"address2": "",
							"city": "Springfield",
							"state": "IL",
							"zip_code": "62701"
						}
					}
				]
			},
			"patient_commercial_insurance": {
				"medical_insurance": {
					"name": "Aetna",
					"plan_type": "PPO",
					"member_number": "456",
					"effective_date": "2022-08-01",
					"group_number": "67890",
					"bin": "",
					"pcn": ""
				},
				"rx_insurance": {
					"name": "CVS Caremark",
					"plan_type": "Rx",
					"member_number": "789",
					"group_number": "98765",
					"bin": "987654",
					"pcn": "pcn"
				}
			},
			"patient_benefits_amounts": {
				"current_period": {
					"total_amount_drug": 20000,
					"total_amount_drug_admin": 2500,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1000,
					"used_amount_drug": 5000,
					"used_amount_drug_admin": 1500,
					"use_count_drug": 3,
					"use_count_drug_admin": 2
				},
				"prior_period": {
					"total_amount_drug": 20000,
					"total_amount_drug_admin": 2500,
					"balance_amount_drug": 10000,
					"balance_amount_drug_admin": 500,
					"used_amount_drug": 10000,
					"used_amount_drug_admin": 2000,
					"use_count_drug": 6,
					"use_count_drug_admin": 4
				}
			},
			"card_data": {},
			"verification_data": {
				"request": {
					"PatientPersonalInfo": {
						"FirstName": "Jane",
						"LastName": "Smith",
						"DateOfBirth": "1988-03-22",
						"Gender": "Female",
						"City": "Springfield",
						"State": "IL",
						"Zipcode": "62704",
						"Email": "jane.smith@example.com",
						"PhoneNumber": "(217) 555-1234"
					},
					"PatientMedicalInsurance": {
						"name": "Aetna",
						"plan_type": "PPO",
						"member_number": "456",
						"effective_date": "2022-08-01",
						"group_number": "67890",
						"bin": "",
						"pcn": ""
					},
					"PatientPharmacyInsurance": {
						"payer_name": "CVS Caremark",
						"payer_type": "Rx",
						"plan_bin": "987654",
						"plan_pcn": "pcn",
						"plan_group": "98765",
						"plan_id": "789",
						"plan_start_date": "2022-08-01",
						"plan_end_date": ""
					},
					"CardRequestInfo": {
						"Type": "Xolair_WEB"
					}
				},
				"response": {
					"CardResponseInfo": {
						"MemberId": "1145725529",
						"Bin": "987654",
						"Pcn": "pcn",
						"Group": "group",
						"AllowableUses": "999",
						"BenefitAmount": "20000",
						"Status": "Active"
					},
					"TransactionInfo": {
						"TransactionId": "e3f07b01-02e0-4bf3-85a0-06d5c6bfeda8",
						"TransactionCreatedDateTime": "2023-11-17T18:08:05.941Z",
						"EnrollmentStatus": "Determined"
					}
				}
			},
			"credentials_id": "1145725529",
			"Enrollment End Date": "2025-12-31",
			"Enrollment Status Reason": "Eligibility Confirmed"
		},
		{
			"Member ID": "1145725530",
			"First Name": "Alice",
			"Last Name": "Johnson",
			"Date of Birth": "1990-05-15",
			"Enrollment Status": "Expired",
			"Prior Member ID": "",
			"Gender": "Female",
			"Drug Patient": "Y",
			"Drug Indication": "Indication Drug",
			"Drug Admin Patient": "Y",
			"Drug Admin Indication": "Indication Admin",
			"Original Enrollment Date Drug": "2021-03-10",
			"Original Enrollment Date Drug Admin": "2021-03-10",
			"Current Enrollment Date Drug": "2022-03-10",
			"Current Enrollment Date Drug Admin": "2022-03-10",
			"Enrollment Source": "self",
			"Address": "789 Pine St",
			"City": "Springfield",
			"State": "IL",
			"Zipcode": "62701",
			"Phone": "(217) 555-9876",
			"Email": "alice.johnson@example.com",
			"Database ID": 3005754,
			"Card Pii": "",
			"Eligibility Data": {
				"drug": {
					"answer_01": "yes",
					"answer_02": "no",
					"answer_03": "1",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "disagree",
					"answer_18": "disagree"
				},
				"admin": {
					"answer_01": "no",
					"answer_02": "yes",
					"answer_03": "0",
					"answer_04": "no",
					"answer_05": "yes",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				}
			},
			"Medicare": "",
			"patient_enrollment": {
				"original_enrollment_date": "2021-03-10",
				"enrollment_date": "2022-03-10",
				"first_name": "Alice",
				"last_name": "Johnson",
				"date_of_birth": "1990-05-15",
				"gender": "Female",
				"request_card": "n",
				"phone": "(217) 555-9876",
				"address": {
					"address_1": "789 Pine St",
					"city": "Springfield",
					"state": "IL",
					"zip_code": "62701",
					"address_2": ""
				},
				"commercial_insurance": {
					"medical_insurance": {
						"name": "UnitedHealthcare",
						"plan_type": "HMO",
						"member_number": "654",
						"effective_date": "2021-03-10",
						"group_number": "54321",
						"bin": "",
						"pcn": ""
					},
					"rx_insurance": {
						"name": "OptumRx",
						"plan_type": "Rx",
						"member_number": "321",
						"group_number": "13579",
						"bin": "135791",
						"pcn": "pcn"
					}
				},
				"lap": {
					"first_name": "",
					"last_name": "",
					"address": {
						"address_1": "",
						"city": "",
						"state": "",
						"zip_code": "",
						"address_2": ""
					},
					"phone": ""
				},
				"enrolled_by": "self",
				"phone_type": "Home",
				"email": "alice.johnson@example.com",
				"email_opt_in": "N",
				"member_id": "1145725530"
			},
			"provider_data": {
				"primary": [
					{
						"provider_id": "500014",
						"npi": "0000000009"
					}
				],
				"secondary": []
			},
			"patient_lap": {
				"first_name": "",
				"last_name": "",
				"address": {
					"address_1": "",
					"city": "",
					"state": "",
					"zip_code": "",
					"address_2": ""
				},
				"phone": ""
			},
			"patient_provider_data": {
				"primary": [
					{
						"first_name": "Linda",
						"npi": "0000000009",
						"last_name": "White",
						"phones": {
							"phone": "2175559876"
						},
						"address": {
							"address1": "789 Pine St",
							"address2": "",
							"city": "Springfield",
							"state": "IL",
							"zip_code": "62701"
						}
					}
				],
				"secondary": []
			},
			"patient_commercial_insurance": {
				"medical_insurance": {
					"name": "UnitedHealthcare",
					"plan_type": "HMO",
					"member_number": "654",
					"effective_date": "2021-03-10",
					"group_number": "54321",
					"bin": "",
					"pcn": ""
				},
				"rx_insurance": {
					"name": "OptumRx",
					"plan_type": "Rx",
					"member_number": "321",
					"group_number": "13579",
					"bin": "135791",
					"pcn": "pcn"
				}
			},
			"patient_benefits_amounts": {
				"current_period": {
					"total_amount_drug": 18000,
					"total_amount_drug_admin": 2000,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1500,
					"used_amount_drug": 3000,
					"used_amount_drug_admin": 500,
					"use_count_drug": 1,
					"use_count_drug_admin": 1
				},
				"prior_period": {
					"total_amount_drug": 18000,
					"total_amount_drug_admin": 2000,
					"balance_amount_drug": 9000,
					"balance_amount_drug_admin": 1000,
					"used_amount_drug": 9000,
					"used_amount_drug_admin": 1000,
					"use_count_drug": 3,
					"use_count_drug_admin": 2
				}
			},
			"card_data": {},
			"verification_data": {
				"request": {
					"PatientPersonalInfo": {
						"FirstName": "Alice",
						"LastName": "Johnson",
						"DateOfBirth": "1990-05-15",
						"Gender": "Female",
						"City": "Springfield",
						"State": "IL",
						"Zipcode": "62701",
						"Email": "alice.johnson@example.com",
						"PhoneNumber": "(217) 555-9876"
					},
					"PatientMedicalInsurance": {
						"name": "UnitedHealthcare",
						"plan_type": "HMO",
						"member_number": "654",
						"effective_date": "2021-03-10",
						"group_number": "54321",
						"bin": "",
						"pcn": ""
					},
					"PatientPharmacyInsurance": {
						"payer_name": "OptumRx",
						"payer_type": "Rx",
						"plan_bin": "135791",
						"plan_pcn": "pcn",
						"plan_group": "13579",
						"plan_id": "321",
						"plan_start_date": "2021-03-10",
						"plan_end_date": ""
					},
					"CardRequestInfo": {
						"Type": "Xolair_WEB"
					}
				},
				"response": {
					"CardResponseInfo": {
						"MemberId": "1145725530",
						"Bin": "135791",
						"Pcn": "pcn",
						"Group": "group",
						"AllowableUses": "999",
						"BenefitAmount": "18000",
						"Status": "Expired"
					},
					"TransactionInfo": {
						"TransactionId": "f4a07b01-02e0-4bf3-85a0-06d5c6bfeda8",
						"TransactionCreatedDateTime": "2023-12-17T18:08:05.941Z",
						"EnrollmentStatus": "Expired"
					}
				}
			},
			"credentials_id": "1145725530",
			"Enrollment End Date": "2023-12-31",
			"Enrollment Status Reason": "Eligibility Expired"
		},
		{
			"Member ID": "1145725528",
			"First Name": "John",
			"Last Name": "Doe",
			"Date of Birth": "2002-11-14",
			"Enrollment Status": "Pending",
			"Prior Member ID": "",
			"Gender": "Male",
			"Drug Patient": "Y",
			"Drug Indication": "Indication Drug",
			"Drug Admin Patient": "Y",
			"Drug Admin Indication": "Indication Admin",
			"Original Enrollment Date Drug": "2023-11-17",
			"Original Enrollment Date Drug Admin": "2023-11-17",
			"Current Enrollment Date Drug": "2024-01-01",
			"Current Enrollment Date Drug Admin": "2024-01-01",
			"Enrollment Source": "patient",
			"Address": "123 Main St",
			"City": "Newport",
			"State": "CA",
			"Zipcode": "11111",
			"Phone": "(123) 456-7890",
			"Email": "john.doe@example.com",
			"Database ID": 2004642,
			"Card Pii": "",
			"Eligibility Data": {
				"drug": {
					"answer_01": "yes",
					"answer_02": "yes",
					"answer_03": "1",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "CA",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				},
				"admin": {
					"answer_01": "yes",
					"answer_02": "yes",
					"answer_03": "1",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "CA",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				}
			},
			"Medicare": "",
			"patient_enrollment": {
				"original_enrollment_date": "2023-11-17",
				"enrollment_date": "2023-11-17",
				"first_name": "John",
				"last_name": "Doe",
				"date_of_birth": "2002-11-14",
				"gender": "Male",
				"request_card": "n",
				"phone": "(123) 456-7890",
				"address": {
					"address_1": "123 Main St",
					"city": "Newport",
					"state": "CA",
					"zip_code": "11111",
					"address_2": ""
				},
				"commercial_insurance": {
					"medical_insurance": {
						"name": "BCBS",
						"plan_type": "HMO",
						"member_number": "123",
						"effective_date": "2023-01-01",
						"group_number": "12345",
						"bin": "",
						"pcn": ""
					},
					"rx_insurance": {
						"name": "",
						"plan_type": "",
						"member_number": "",
						"group_number": "",
						"bin": "",
						"pcn": ""
					}
				},
				"lap": {
					"first_name": "",
					"last_name": "",
					"address": {
						"address_1": "",
						"city": "",
						"state": "",
						"zip_code": "",
						"address_2": ""
					},
					"phone": ""
				},
				"enrolled_by": "patient",
				"phone_type": "Home",
				"email": "john.doe@example.com",
				"email_opt_in": "N",
				"member_id": "1145725528"
			},
			"provider_data": {
				"primary": [
					{
						"provider_id": "500011",
						"npi": "0000000006"
					}
				],
				"secondary": [
					{
						"provider_id": "",
						"npi": ""
					}
				]
			},
			"patient_lap": {
				"first_name": "",
				"last_name": "",
				"address": {
					"address_1": "",
					"city": "",
					"state": "",
					"zip_code": "",
					"address_2": ""
				},
				"phone": ""
			},
			"patient_provider_data": {
				"primary": [
					{
						"first_name": "John",
						"npi": "0000000006",
						"last_name": "Doe",
						"phones": {
							"phone": "1234567890"
						},
						"address": {
							"address1": "123 Main St",
							"address2": "",
							"city": "Newport",
							"state": "CA",
							"zip_code": "11111"
						}
					}
				],
				"secondary": [
					{
						"practice_name": "",
						"npi": "",
						"phones": {
							"phone": ""
						},
						"address": {
							"address1": "",
							"address2": "",
							"city": "",
							"state": "",
							"zip_code": ""
						}
					}
				]
			},
			"patient_commercial_insurance": {
				"medical_insurance": {
					"name": "BCBS",
					"plan_type": "HMO",
					"member_number": "123",
					"effective_date": "2023-01-01",
					"group_number": "12345",
					"bin": "",
					"pcn": ""
				},
				"rx_insurance": {
					"name": "",
					"plan_type": "",
					"member_number": "",
					"group_number": "",
					"bin": "",
					"pcn": ""
				}
			},
			"patient_benefits_amounts": {
				"current_period": {
					"total_amount_drug": 15000,
					"total_amount_drug_admin": 1500,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1500,
					"used_amount_drug": 0,
					"used_amount_drug_admin": 0,
					"use_count_drug": 0,
					"use_count_drug_admin": 0
				},
				"prior_period": {
					"total_amount_drug": 15000,
					"total_amount_drug_admin": 1500,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1500,
					"used_amount_drug": 0,
					"used_amount_drug_admin": 0,
					"use_count_drug": 0,
					"use_count_drug_admin": 0
				}
			},
			"card_data": {},
			"verification_data": {
				"request": {
					"PatientPersonalInfo": {
						"FirstName": "John",
						"LastName": "Doe",
						"DateOfBirth": "2002-11-14",
						"Gender": "Male",
						"City": "Newport",
						"State": "CA",
						"Zipcode": "11111",
						"Email": "john.doe@example.com",
						"PhoneNumber": "(123) 456-7890"
					},
					"PatientMedicalInsurance": {
						"name": "BCBS",
						"plan_type": "HMO",
						"member_number": "123",
						"effective_date": "2023-01-01",
						"group_number": "12345",
						"bin": "",
						"pcn": ""
					},
					"PatientPharmacyInsurance": {
						"payer_name": "",
						"payer_type": "",
						"plan_bin": "",
						"plan_pcn": "",
						"plan_group": "",
						"plan_id": "",
						"plan_start_date": "",
						"plan_end_date": ""
					},
					"CardRequestInfo": {
						"Type": "Xolair_WEB"
					}
				},
				"response": {
					"CardResponseInfo": {
						"MemberId": "1145725528",
						"Bin": "123456",
						"Pcn": "pcn",
						"Group": "group",
						"AllowableUses": "999",
						"BenefitAmount": "15000",
						"Status": "Inactive"
					},
					"TransactionInfo": {
						"TransactionId": "e2f07b01-02e0-4bf3-85a0-06d5c6bfeda8",
						"TransactionCreatedDateTime": "2023-11-17T18:08:05.941Z",
						"EnrollmentStatus": "Not Determined"
					}
				}
			},
			"credentials_id": "1145725528",
			"Enrollment End Date": "2024-12-31",
			"Enrollment Status Reason": ""
		},
		{
			"Member ID": "1145725529",
			"First Name": "Jane",
			"Last Name": "Smith",
			"Date of Birth": "1988-03-22",
			"Enrollment Status": "Active",
			"Prior Member ID": "1234567890",
			"Gender": "Female",
			"Drug Patient": "N",
			"Drug Indication": "NA",
			"Drug Admin Patient": "Y",
			"Drug Admin Indication": "Indication Admin",
			"Original Enrollment Date Drug": "2022-08-01",
			"Original Enrollment Date Drug Admin": "2022-08-01",
			"Current Enrollment Date Drug": "",
			"Current Enrollment Date Drug Admin": "2024-01-01",
			"Enrollment Source": "provider",
			"Address": "456 Elm St",
			"City": "Springfield",
			"State": "IL",
			"Zipcode": "62704",
			"Phone": "(217) 555-1234",
			"Email": "jane.smith@example.com",
			"Database ID": 2004643,
			"Card Pii": "",
			"Eligibility Data": {
				"drug": {
					"answer_01": "no",
					"answer_02": "no",
					"answer_03": "0",
					"answer_04": "no",
					"answer_05": "yes",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "disagree",
					"answer_18": "disagree"
				},
				"admin": {
					"answer_01": "yes",
					"answer_02": "yes",
					"answer_03": "2",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				}
			},
			"Medicare": "",
			"patient_enrollment": {
				"original_enrollment_date": "2022-08-01",
				"enrollment_date": "2022-08-01",
				"first_name": "Jane",
				"last_name": "Smith",
				"date_of_birth": "1988-03-22",
				"gender": "Female",
				"request_card": "n",
				"phone": "(217) 555-1234",
				"address": {
					"address_1": "456 Elm St",
					"city": "Springfield",
					"state": "IL",
					"zip_code": "62704",
					"address_2": ""
				},
				"commercial_insurance": {
					"medical_insurance": {
						"name": "Aetna",
						"plan_type": "PPO",
						"member_number": "456",
						"effective_date": "2022-08-01",
						"group_number": "67890",
						"bin": "",
						"pcn": ""
					},
					"rx_insurance": {
						"name": "CVS Caremark",
						"plan_type": "Rx",
						"member_number": "789",
						"group_number": "98765",
						"bin": "987654",
						"pcn": "pcn"
					}
				},
				"lap": {
					"first_name": "",
					"last_name": "",
					"address": {
						"address_1": "",
						"city": "",
						"state": "",
						"zip_code": "",
						"address_2": ""
					},
					"phone": ""
				},
				"enrolled_by": "provider",
				"phone_type": "Mobile",
				"email": "jane.smith@example.com",
				"email_opt_in": "Y",
				"member_id": "1145725529"
			},
			"provider_data": {
				"primary": [
					{
						"provider_id": "500012",
						"npi": "0000000007"
					}
				],
				"secondary": [
					{
						"provider_id": "500013",
						"npi": "0000000008"
					}
				]
			},
			"patient_lap": {
				"first_name": "",
				"last_name": "",
				"address": {
					"address_1": "",
					"city": "",
					"state": "",
					"zip_code": "",
					"address_2": ""
				},
				"phone": ""
			},
			"patient_provider_data": {
				"primary": [
					{
						"first_name": "James",
						"npi": "0000000007",
						"last_name": "Brown",
						"phones": {
							"phone": "2175551234"
						},
						"address": {
							"address1": "456 Elm St",
							"address2": "",
							"city": "Springfield",
							"state": "IL",
							"zip_code": "62704"
						}
					}
				],
				"secondary": [
					{
						"practice_name": "Clinic 2",
						"npi": "0000000008",
						"phones": {
							"phone": "2175554321"
						},
						"address": {
							"address1": "789 Oak St",
							"address2": "",
							"city": "Springfield",
							"state": "IL",
							"zip_code": "62701"
						}
					}
				]
			},
			"patient_commercial_insurance": {
				"medical_insurance": {
					"name": "Aetna",
					"plan_type": "PPO",
					"member_number": "456",
					"effective_date": "2022-08-01",
					"group_number": "67890",
					"bin": "",
					"pcn": ""
				},
				"rx_insurance": {
					"name": "CVS Caremark",
					"plan_type": "Rx",
					"member_number": "789",
					"group_number": "98765",
					"bin": "987654",
					"pcn": "pcn"
				}
			},
			"patient_benefits_amounts": {
				"current_period": {
					"total_amount_drug": 20000,
					"total_amount_drug_admin": 2500,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1000,
					"used_amount_drug": 5000,
					"used_amount_drug_admin": 1500,
					"use_count_drug": 3,
					"use_count_drug_admin": 2
				},
				"prior_period": {
					"total_amount_drug": 20000,
					"total_amount_drug_admin": 2500,
					"balance_amount_drug": 10000,
					"balance_amount_drug_admin": 500,
					"used_amount_drug": 10000,
					"used_amount_drug_admin": 2000,
					"use_count_drug": 6,
					"use_count_drug_admin": 4
				}
			},
			"card_data": {},
			"verification_data": {
				"request": {
					"PatientPersonalInfo": {
						"FirstName": "Jane",
						"LastName": "Smith",
						"DateOfBirth": "1988-03-22",
						"Gender": "Female",
						"City": "Springfield",
						"State": "IL",
						"Zipcode": "62704",
						"Email": "jane.smith@example.com",
						"PhoneNumber": "(217) 555-1234"
					},
					"PatientMedicalInsurance": {
						"name": "Aetna",
						"plan_type": "PPO",
						"member_number": "456",
						"effective_date": "2022-08-01",
						"group_number": "67890",
						"bin": "",
						"pcn": ""
					},
					"PatientPharmacyInsurance": {
						"payer_name": "CVS Caremark",
						"payer_type": "Rx",
						"plan_bin": "987654",
						"plan_pcn": "pcn",
						"plan_group": "98765",
						"plan_id": "789",
						"plan_start_date": "2022-08-01",
						"plan_end_date": ""
					},
					"CardRequestInfo": {
						"Type": "Xolair_WEB"
					}
				},
				"response": {
					"CardResponseInfo": {
						"MemberId": "1145725529",
						"Bin": "987654",
						"Pcn": "pcn",
						"Group": "group",
						"AllowableUses": "999",
						"BenefitAmount": "20000",
						"Status": "Active"
					},
					"TransactionInfo": {
						"TransactionId": "e3f07b01-02e0-4bf3-85a0-06d5c6bfeda8",
						"TransactionCreatedDateTime": "2023-11-17T18:08:05.941Z",
						"EnrollmentStatus": "Determined"
					}
				}
			},
			"credentials_id": "1145725529",
			"Enrollment End Date": "2025-12-31",
			"Enrollment Status Reason": "Eligibility Confirmed"
		},
		{
			"Member ID": "1145725530",
			"First Name": "Alice",
			"Last Name": "Johnson",
			"Date of Birth": "1990-05-15",
			"Enrollment Status": "Expired",
			"Prior Member ID": "",
			"Gender": "Female",
			"Drug Patient": "Y",
			"Drug Indication": "Indication Drug",
			"Drug Admin Patient": "Y",
			"Drug Admin Indication": "Indication Admin",
			"Original Enrollment Date Drug": "2021-03-10",
			"Original Enrollment Date Drug Admin": "2021-03-10",
			"Current Enrollment Date Drug": "2022-03-10",
			"Current Enrollment Date Drug Admin": "2022-03-10",
			"Enrollment Source": "self",
			"Address": "789 Pine St",
			"City": "Springfield",
			"State": "IL",
			"Zipcode": "62701",
			"Phone": "(217) 555-9876",
			"Email": "alice.johnson@example.com",
			"Database ID": 3005754,
			"Card Pii": "",
			"Eligibility Data": {
				"drug": {
					"answer_01": "yes",
					"answer_02": "no",
					"answer_03": "1",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "disagree",
					"answer_18": "disagree"
				},
				"admin": {
					"answer_01": "no",
					"answer_02": "yes",
					"answer_03": "0",
					"answer_04": "no",
					"answer_05": "yes",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				}
			},
			"Medicare": "",
			"patient_enrollment": {
				"original_enrollment_date": "2021-03-10",
				"enrollment_date": "2022-03-10",
				"first_name": "Alice",
				"last_name": "Johnson",
				"date_of_birth": "1990-05-15",
				"gender": "Female",
				"request_card": "n",
				"phone": "(217) 555-9876",
				"address": {
					"address_1": "789 Pine St",
					"city": "Springfield",
					"state": "IL",
					"zip_code": "62701",
					"address_2": ""
				},
				"commercial_insurance": {
					"medical_insurance": {
						"name": "UnitedHealthcare",
						"plan_type": "HMO",
						"member_number": "654",
						"effective_date": "2021-03-10",
						"group_number": "54321",
						"bin": "",
						"pcn": ""
					},
					"rx_insurance": {
						"name": "OptumRx",
						"plan_type": "Rx",
						"member_number": "321",
						"group_number": "13579",
						"bin": "135791",
						"pcn": "pcn"
					}
				},
				"lap": {
					"first_name": "",
					"last_name": "",
					"address": {
						"address_1": "",
						"city": "",
						"state": "",
						"zip_code": "",
						"address_2": ""
					},
					"phone": ""
				},
				"enrolled_by": "self",
				"phone_type": "Home",
				"email": "alice.johnson@example.com",
				"email_opt_in": "N",
				"member_id": "1145725530"
			},
			"provider_data": {
				"primary": [
					{
						"provider_id": "500014",
						"npi": "0000000009"
					}
				],
				"secondary": []
			},
			"patient_lap": {
				"first_name": "",
				"last_name": "",
				"address": {
					"address_1": "",
					"city": "",
					"state": "",
					"zip_code": "",
					"address_2": ""
				},
				"phone": ""
			},
			"patient_provider_data": {
				"primary": [
					{
						"first_name": "Linda",
						"npi": "0000000009",
						"last_name": "White",
						"phones": {
							"phone": "2175559876"
						},
						"address": {
							"address1": "789 Pine St",
							"address2": "",
							"city": "Springfield",
							"state": "IL",
							"zip_code": "62701"
						}
					}
				],
				"secondary": []
			},
			"patient_commercial_insurance": {
				"medical_insurance": {
					"name": "UnitedHealthcare",
					"plan_type": "HMO",
					"member_number": "654",
					"effective_date": "2021-03-10",
					"group_number": "54321",
					"bin": "",
					"pcn": ""
				},
				"rx_insurance": {
					"name": "OptumRx",
					"plan_type": "Rx",
					"member_number": "321",
					"group_number": "13579",
					"bin": "135791",
					"pcn": "pcn"
				}
			},
			"patient_benefits_amounts": {
				"current_period": {
					"total_amount_drug": 18000,
					"total_amount_drug_admin": 2000,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1500,
					"used_amount_drug": 3000,
					"used_amount_drug_admin": 500,
					"use_count_drug": 1,
					"use_count_drug_admin": 1
				},
				"prior_period": {
					"total_amount_drug": 18000,
					"total_amount_drug_admin": 2000,
					"balance_amount_drug": 9000,
					"balance_amount_drug_admin": 1000,
					"used_amount_drug": 9000,
					"used_amount_drug_admin": 1000,
					"use_count_drug": 3,
					"use_count_drug_admin": 2
				}
			},
			"card_data": {},
			"verification_data": {
				"request": {
					"PatientPersonalInfo": {
						"FirstName": "Alice",
						"LastName": "Johnson",
						"DateOfBirth": "1990-05-15",
						"Gender": "Female",
						"City": "Springfield",
						"State": "IL",
						"Zipcode": "62701",
						"Email": "alice.johnson@example.com",
						"PhoneNumber": "(217) 555-9876"
					},
					"PatientMedicalInsurance": {
						"name": "UnitedHealthcare",
						"plan_type": "HMO",
						"member_number": "654",
						"effective_date": "2021-03-10",
						"group_number": "54321",
						"bin": "",
						"pcn": ""
					},
					"PatientPharmacyInsurance": {
						"payer_name": "OptumRx",
						"payer_type": "Rx",
						"plan_bin": "135791",
						"plan_pcn": "pcn",
						"plan_group": "13579",
						"plan_id": "321",
						"plan_start_date": "2021-03-10",
						"plan_end_date": ""
					},
					"CardRequestInfo": {
						"Type": "Xolair_WEB"
					}
				},
				"response": {
					"CardResponseInfo": {
						"MemberId": "1145725530",
						"Bin": "135791",
						"Pcn": "pcn",
						"Group": "group",
						"AllowableUses": "999",
						"BenefitAmount": "18000",
						"Status": "Expired"
					},
					"TransactionInfo": {
						"TransactionId": "f4a07b01-02e0-4bf3-85a0-06d5c6bfeda8",
						"TransactionCreatedDateTime": "2023-12-17T18:08:05.941Z",
						"EnrollmentStatus": "Expired"
					}
				}
			},
			"credentials_id": "1145725530",
			"Enrollment End Date": "2023-12-31",
			"Enrollment Status Reason": "Eligibility Expired"
		},
		{
			"Member ID": "1145725528",
			"First Name": "John",
			"Last Name": "Doe",
			"Date of Birth": "2002-11-14",
			"Enrollment Status": "Pending",
			"Prior Member ID": "",
			"Gender": "Male",
			"Drug Patient": "Y",
			"Drug Indication": "Indication Drug",
			"Drug Admin Patient": "Y",
			"Drug Admin Indication": "Indication Admin",
			"Original Enrollment Date Drug": "2023-11-17",
			"Original Enrollment Date Drug Admin": "2023-11-17",
			"Current Enrollment Date Drug": "2024-01-01",
			"Current Enrollment Date Drug Admin": "2024-01-01",
			"Enrollment Source": "patient",
			"Address": "123 Main St",
			"City": "Newport",
			"State": "CA",
			"Zipcode": "11111",
			"Phone": "(123) 456-7890",
			"Email": "john.doe@example.com",
			"Database ID": 2004642,
			"Card Pii": "",
			"Eligibility Data": {
				"drug": {
					"answer_01": "yes",
					"answer_02": "yes",
					"answer_03": "1",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "CA",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				},
				"admin": {
					"answer_01": "yes",
					"answer_02": "yes",
					"answer_03": "1",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "CA",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				}
			},
			"Medicare": "",
			"patient_enrollment": {
				"original_enrollment_date": "2023-11-17",
				"enrollment_date": "2023-11-17",
				"first_name": "John",
				"last_name": "Doe",
				"date_of_birth": "2002-11-14",
				"gender": "Male",
				"request_card": "n",
				"phone": "(123) 456-7890",
				"address": {
					"address_1": "123 Main St",
					"city": "Newport",
					"state": "CA",
					"zip_code": "11111",
					"address_2": ""
				},
				"commercial_insurance": {
					"medical_insurance": {
						"name": "BCBS",
						"plan_type": "HMO",
						"member_number": "123",
						"effective_date": "2023-01-01",
						"group_number": "12345",
						"bin": "",
						"pcn": ""
					},
					"rx_insurance": {
						"name": "",
						"plan_type": "",
						"member_number": "",
						"group_number": "",
						"bin": "",
						"pcn": ""
					}
				},
				"lap": {
					"first_name": "",
					"last_name": "",
					"address": {
						"address_1": "",
						"city": "",
						"state": "",
						"zip_code": "",
						"address_2": ""
					},
					"phone": ""
				},
				"enrolled_by": "patient",
				"phone_type": "Home",
				"email": "john.doe@example.com",
				"email_opt_in": "N",
				"member_id": "1145725528"
			},
			"provider_data": {
				"primary": [
					{
						"provider_id": "500011",
						"npi": "0000000006"
					}
				],
				"secondary": [
					{
						"provider_id": "",
						"npi": ""
					}
				]
			},
			"patient_lap": {
				"first_name": "",
				"last_name": "",
				"address": {
					"address_1": "",
					"city": "",
					"state": "",
					"zip_code": "",
					"address_2": ""
				},
				"phone": ""
			},
			"patient_provider_data": {
				"primary": [
					{
						"first_name": "John",
						"npi": "0000000006",
						"last_name": "Doe",
						"phones": {
							"phone": "1234567890"
						},
						"address": {
							"address1": "123 Main St",
							"address2": "",
							"city": "Newport",
							"state": "CA",
							"zip_code": "11111"
						}
					}
				],
				"secondary": [
					{
						"practice_name": "",
						"npi": "",
						"phones": {
							"phone": ""
						},
						"address": {
							"address1": "",
							"address2": "",
							"city": "",
							"state": "",
							"zip_code": ""
						}
					}
				]
			},
			"patient_commercial_insurance": {
				"medical_insurance": {
					"name": "BCBS",
					"plan_type": "HMO",
					"member_number": "123",
					"effective_date": "2023-01-01",
					"group_number": "12345",
					"bin": "",
					"pcn": ""
				},
				"rx_insurance": {
					"name": "",
					"plan_type": "",
					"member_number": "",
					"group_number": "",
					"bin": "",
					"pcn": ""
				}
			},
			"patient_benefits_amounts": {
				"current_period": {
					"total_amount_drug": 15000,
					"total_amount_drug_admin": 1500,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1500,
					"used_amount_drug": 0,
					"used_amount_drug_admin": 0,
					"use_count_drug": 0,
					"use_count_drug_admin": 0
				},
				"prior_period": {
					"total_amount_drug": 15000,
					"total_amount_drug_admin": 1500,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1500,
					"used_amount_drug": 0,
					"used_amount_drug_admin": 0,
					"use_count_drug": 0,
					"use_count_drug_admin": 0
				}
			},
			"card_data": {},
			"verification_data": {
				"request": {
					"PatientPersonalInfo": {
						"FirstName": "John",
						"LastName": "Doe",
						"DateOfBirth": "2002-11-14",
						"Gender": "Male",
						"City": "Newport",
						"State": "CA",
						"Zipcode": "11111",
						"Email": "john.doe@example.com",
						"PhoneNumber": "(123) 456-7890"
					},
					"PatientMedicalInsurance": {
						"name": "BCBS",
						"plan_type": "HMO",
						"member_number": "123",
						"effective_date": "2023-01-01",
						"group_number": "12345",
						"bin": "",
						"pcn": ""
					},
					"PatientPharmacyInsurance": {
						"payer_name": "",
						"payer_type": "",
						"plan_bin": "",
						"plan_pcn": "",
						"plan_group": "",
						"plan_id": "",
						"plan_start_date": "",
						"plan_end_date": ""
					},
					"CardRequestInfo": {
						"Type": "Xolair_WEB"
					}
				},
				"response": {
					"CardResponseInfo": {
						"MemberId": "1145725528",
						"Bin": "123456",
						"Pcn": "pcn",
						"Group": "group",
						"AllowableUses": "999",
						"BenefitAmount": "15000",
						"Status": "Inactive"
					},
					"TransactionInfo": {
						"TransactionId": "e2f07b01-02e0-4bf3-85a0-06d5c6bfeda8",
						"TransactionCreatedDateTime": "2023-11-17T18:08:05.941Z",
						"EnrollmentStatus": "Not Determined"
					}
				}
			},
			"credentials_id": "1145725528",
			"Enrollment End Date": "2024-12-31",
			"Enrollment Status Reason": ""
		},
		{
			"Member ID": "1145725529",
			"First Name": "Jane",
			"Last Name": "Smith",
			"Date of Birth": "1988-03-22",
			"Enrollment Status": "Active",
			"Prior Member ID": "1234567890",
			"Gender": "Female",
			"Drug Patient": "N",
			"Drug Indication": "NA",
			"Drug Admin Patient": "Y",
			"Drug Admin Indication": "Indication Admin",
			"Original Enrollment Date Drug": "2022-08-01",
			"Original Enrollment Date Drug Admin": "2022-08-01",
			"Current Enrollment Date Drug": "",
			"Current Enrollment Date Drug Admin": "2024-01-01",
			"Enrollment Source": "provider",
			"Address": "456 Elm St",
			"City": "Springfield",
			"State": "IL",
			"Zipcode": "62704",
			"Phone": "(217) 555-1234",
			"Email": "jane.smith@example.com",
			"Database ID": 2004643,
			"Card Pii": "",
			"Eligibility Data": {
				"drug": {
					"answer_01": "no",
					"answer_02": "no",
					"answer_03": "0",
					"answer_04": "no",
					"answer_05": "yes",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "disagree",
					"answer_18": "disagree"
				},
				"admin": {
					"answer_01": "yes",
					"answer_02": "yes",
					"answer_03": "2",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				}
			},
			"Medicare": "",
			"patient_enrollment": {
				"original_enrollment_date": "2022-08-01",
				"enrollment_date": "2022-08-01",
				"first_name": "Jane",
				"last_name": "Smith",
				"date_of_birth": "1988-03-22",
				"gender": "Female",
				"request_card": "n",
				"phone": "(217) 555-1234",
				"address": {
					"address_1": "456 Elm St",
					"city": "Springfield",
					"state": "IL",
					"zip_code": "62704",
					"address_2": ""
				},
				"commercial_insurance": {
					"medical_insurance": {
						"name": "Aetna",
						"plan_type": "PPO",
						"member_number": "456",
						"effective_date": "2022-08-01",
						"group_number": "67890",
						"bin": "",
						"pcn": ""
					},
					"rx_insurance": {
						"name": "CVS Caremark",
						"plan_type": "Rx",
						"member_number": "789",
						"group_number": "98765",
						"bin": "987654",
						"pcn": "pcn"
					}
				},
				"lap": {
					"first_name": "",
					"last_name": "",
					"address": {
						"address_1": "",
						"city": "",
						"state": "",
						"zip_code": "",
						"address_2": ""
					},
					"phone": ""
				},
				"enrolled_by": "provider",
				"phone_type": "Mobile",
				"email": "jane.smith@example.com",
				"email_opt_in": "Y",
				"member_id": "1145725529"
			},
			"provider_data": {
				"primary": [
					{
						"provider_id": "500012",
						"npi": "0000000007"
					}
				],
				"secondary": [
					{
						"provider_id": "500013",
						"npi": "0000000008"
					}
				]
			},
			"patient_lap": {
				"first_name": "",
				"last_name": "",
				"address": {
					"address_1": "",
					"city": "",
					"state": "",
					"zip_code": "",
					"address_2": ""
				},
				"phone": ""
			},
			"patient_provider_data": {
				"primary": [
					{
						"first_name": "James",
						"npi": "0000000007",
						"last_name": "Brown",
						"phones": {
							"phone": "2175551234"
						},
						"address": {
							"address1": "456 Elm St",
							"address2": "",
							"city": "Springfield",
							"state": "IL",
							"zip_code": "62704"
						}
					}
				],
				"secondary": [
					{
						"practice_name": "Clinic 2",
						"npi": "0000000008",
						"phones": {
							"phone": "2175554321"
						},
						"address": {
							"address1": "789 Oak St",
							"address2": "",
							"city": "Springfield",
							"state": "IL",
							"zip_code": "62701"
						}
					}
				]
			},
			"patient_commercial_insurance": {
				"medical_insurance": {
					"name": "Aetna",
					"plan_type": "PPO",
					"member_number": "456",
					"effective_date": "2022-08-01",
					"group_number": "67890",
					"bin": "",
					"pcn": ""
				},
				"rx_insurance": {
					"name": "CVS Caremark",
					"plan_type": "Rx",
					"member_number": "789",
					"group_number": "98765",
					"bin": "987654",
					"pcn": "pcn"
				}
			},
			"patient_benefits_amounts": {
				"current_period": {
					"total_amount_drug": 20000,
					"total_amount_drug_admin": 2500,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1000,
					"used_amount_drug": 5000,
					"used_amount_drug_admin": 1500,
					"use_count_drug": 3,
					"use_count_drug_admin": 2
				},
				"prior_period": {
					"total_amount_drug": 20000,
					"total_amount_drug_admin": 2500,
					"balance_amount_drug": 10000,
					"balance_amount_drug_admin": 500,
					"used_amount_drug": 10000,
					"used_amount_drug_admin": 2000,
					"use_count_drug": 6,
					"use_count_drug_admin": 4
				}
			},
			"card_data": {},
			"verification_data": {
				"request": {
					"PatientPersonalInfo": {
						"FirstName": "Jane",
						"LastName": "Smith",
						"DateOfBirth": "1988-03-22",
						"Gender": "Female",
						"City": "Springfield",
						"State": "IL",
						"Zipcode": "62704",
						"Email": "jane.smith@example.com",
						"PhoneNumber": "(217) 555-1234"
					},
					"PatientMedicalInsurance": {
						"name": "Aetna",
						"plan_type": "PPO",
						"member_number": "456",
						"effective_date": "2022-08-01",
						"group_number": "67890",
						"bin": "",
						"pcn": ""
					},
					"PatientPharmacyInsurance": {
						"payer_name": "CVS Caremark",
						"payer_type": "Rx",
						"plan_bin": "987654",
						"plan_pcn": "pcn",
						"plan_group": "98765",
						"plan_id": "789",
						"plan_start_date": "2022-08-01",
						"plan_end_date": ""
					},
					"CardRequestInfo": {
						"Type": "Xolair_WEB"
					}
				},
				"response": {
					"CardResponseInfo": {
						"MemberId": "1145725529",
						"Bin": "987654",
						"Pcn": "pcn",
						"Group": "group",
						"AllowableUses": "999",
						"BenefitAmount": "20000",
						"Status": "Active"
					},
					"TransactionInfo": {
						"TransactionId": "e3f07b01-02e0-4bf3-85a0-06d5c6bfeda8",
						"TransactionCreatedDateTime": "2023-11-17T18:08:05.941Z",
						"EnrollmentStatus": "Determined"
					}
				}
			},
			"credentials_id": "1145725529",
			"Enrollment End Date": "2025-12-31",
			"Enrollment Status Reason": "Eligibility Confirmed"
		},
		{
			"Member ID": "1145725530",
			"First Name": "Alice",
			"Last Name": "Johnson",
			"Date of Birth": "1990-05-15",
			"Enrollment Status": "Expired",
			"Prior Member ID": "",
			"Gender": "Female",
			"Drug Patient": "Y",
			"Drug Indication": "Indication Drug",
			"Drug Admin Patient": "Y",
			"Drug Admin Indication": "Indication Admin",
			"Original Enrollment Date Drug": "2021-03-10",
			"Original Enrollment Date Drug Admin": "2021-03-10",
			"Current Enrollment Date Drug": "2022-03-10",
			"Current Enrollment Date Drug Admin": "2022-03-10",
			"Enrollment Source": "self",
			"Address": "789 Pine St",
			"City": "Springfield",
			"State": "IL",
			"Zipcode": "62701",
			"Phone": "(217) 555-9876",
			"Email": "alice.johnson@example.com",
			"Database ID": 3005754,
			"Card Pii": "",
			"Eligibility Data": {
				"drug": {
					"answer_01": "yes",
					"answer_02": "no",
					"answer_03": "1",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "disagree",
					"answer_18": "disagree"
				},
				"admin": {
					"answer_01": "no",
					"answer_02": "yes",
					"answer_03": "0",
					"answer_04": "no",
					"answer_05": "yes",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				}
			},
			"Medicare": "",
			"patient_enrollment": {
				"original_enrollment_date": "2021-03-10",
				"enrollment_date": "2022-03-10",
				"first_name": "Alice",
				"last_name": "Johnson",
				"date_of_birth": "1990-05-15",
				"gender": "Female",
				"request_card": "n",
				"phone": "(217) 555-9876",
				"address": {
					"address_1": "789 Pine St",
					"city": "Springfield",
					"state": "IL",
					"zip_code": "62701",
					"address_2": ""
				},
				"commercial_insurance": {
					"medical_insurance": {
						"name": "UnitedHealthcare",
						"plan_type": "HMO",
						"member_number": "654",
						"effective_date": "2021-03-10",
						"group_number": "54321",
						"bin": "",
						"pcn": ""
					},
					"rx_insurance": {
						"name": "OptumRx",
						"plan_type": "Rx",
						"member_number": "321",
						"group_number": "13579",
						"bin": "135791",
						"pcn": "pcn"
					}
				},
				"lap": {
					"first_name": "",
					"last_name": "",
					"address": {
						"address_1": "",
						"city": "",
						"state": "",
						"zip_code": "",
						"address_2": ""
					},
					"phone": ""
				},
				"enrolled_by": "self",
				"phone_type": "Home",
				"email": "alice.johnson@example.com",
				"email_opt_in": "N",
				"member_id": "1145725530"
			},
			"provider_data": {
				"primary": [
					{
						"provider_id": "500014",
						"npi": "0000000009"
					}
				],
				"secondary": []
			},
			"patient_lap": {
				"first_name": "",
				"last_name": "",
				"address": {
					"address_1": "",
					"city": "",
					"state": "",
					"zip_code": "",
					"address_2": ""
				},
				"phone": ""
			},
			"patient_provider_data": {
				"primary": [
					{
						"first_name": "Linda",
						"npi": "0000000009",
						"last_name": "White",
						"phones": {
							"phone": "2175559876"
						},
						"address": {
							"address1": "789 Pine St",
							"address2": "",
							"city": "Springfield",
							"state": "IL",
							"zip_code": "62701"
						}
					}
				],
				"secondary": []
			},
			"patient_commercial_insurance": {
				"medical_insurance": {
					"name": "UnitedHealthcare",
					"plan_type": "HMO",
					"member_number": "654",
					"effective_date": "2021-03-10",
					"group_number": "54321",
					"bin": "",
					"pcn": ""
				},
				"rx_insurance": {
					"name": "OptumRx",
					"plan_type": "Rx",
					"member_number": "321",
					"group_number": "13579",
					"bin": "135791",
					"pcn": "pcn"
				}
			},
			"patient_benefits_amounts": {
				"current_period": {
					"total_amount_drug": 18000,
					"total_amount_drug_admin": 2000,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1500,
					"used_amount_drug": 3000,
					"used_amount_drug_admin": 500,
					"use_count_drug": 1,
					"use_count_drug_admin": 1
				},
				"prior_period": {
					"total_amount_drug": 18000,
					"total_amount_drug_admin": 2000,
					"balance_amount_drug": 9000,
					"balance_amount_drug_admin": 1000,
					"used_amount_drug": 9000,
					"used_amount_drug_admin": 1000,
					"use_count_drug": 3,
					"use_count_drug_admin": 2
				}
			},
			"card_data": {},
			"verification_data": {
				"request": {
					"PatientPersonalInfo": {
						"FirstName": "Alice",
						"LastName": "Johnson",
						"DateOfBirth": "1990-05-15",
						"Gender": "Female",
						"City": "Springfield",
						"State": "IL",
						"Zipcode": "62701",
						"Email": "alice.johnson@example.com",
						"PhoneNumber": "(217) 555-9876"
					},
					"PatientMedicalInsurance": {
						"name": "UnitedHealthcare",
						"plan_type": "HMO",
						"member_number": "654",
						"effective_date": "2021-03-10",
						"group_number": "54321",
						"bin": "",
						"pcn": ""
					},
					"PatientPharmacyInsurance": {
						"payer_name": "OptumRx",
						"payer_type": "Rx",
						"plan_bin": "135791",
						"plan_pcn": "pcn",
						"plan_group": "13579",
						"plan_id": "321",
						"plan_start_date": "2021-03-10",
						"plan_end_date": ""
					},
					"CardRequestInfo": {
						"Type": "Xolair_WEB"
					}
				},
				"response": {
					"CardResponseInfo": {
						"MemberId": "1145725530",
						"Bin": "135791",
						"Pcn": "pcn",
						"Group": "group",
						"AllowableUses": "999",
						"BenefitAmount": "18000",
						"Status": "Expired"
					},
					"TransactionInfo": {
						"TransactionId": "f4a07b01-02e0-4bf3-85a0-06d5c6bfeda8",
						"TransactionCreatedDateTime": "2023-12-17T18:08:05.941Z",
						"EnrollmentStatus": "Expired"
					}
				}
			},
			"credentials_id": "1145725530",
			"Enrollment End Date": "2023-12-31",
			"Enrollment Status Reason": "Eligibility Expired"
		},
		{
			"Member ID": "1145725528",
			"First Name": "John",
			"Last Name": "Doe",
			"Date of Birth": "2002-11-14",
			"Enrollment Status": "Pending",
			"Prior Member ID": "",
			"Gender": "Male",
			"Drug Patient": "Y",
			"Drug Indication": "Indication Drug",
			"Drug Admin Patient": "Y",
			"Drug Admin Indication": "Indication Admin",
			"Original Enrollment Date Drug": "2023-11-17",
			"Original Enrollment Date Drug Admin": "2023-11-17",
			"Current Enrollment Date Drug": "2024-01-01",
			"Current Enrollment Date Drug Admin": "2024-01-01",
			"Enrollment Source": "patient",
			"Address": "123 Main St",
			"City": "Newport",
			"State": "CA",
			"Zipcode": "11111",
			"Phone": "(123) 456-7890",
			"Email": "john.doe@example.com",
			"Database ID": 2004642,
			"Card Pii": "",
			"Eligibility Data": {
				"drug": {
					"answer_01": "yes",
					"answer_02": "yes",
					"answer_03": "1",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "CA",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				},
				"admin": {
					"answer_01": "yes",
					"answer_02": "yes",
					"answer_03": "1",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "CA",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				}
			},
			"Medicare": "",
			"patient_enrollment": {
				"original_enrollment_date": "2023-11-17",
				"enrollment_date": "2023-11-17",
				"first_name": "John",
				"last_name": "Doe",
				"date_of_birth": "2002-11-14",
				"gender": "Male",
				"request_card": "n",
				"phone": "(123) 456-7890",
				"address": {
					"address_1": "123 Main St",
					"city": "Newport",
					"state": "CA",
					"zip_code": "11111",
					"address_2": ""
				},
				"commercial_insurance": {
					"medical_insurance": {
						"name": "BCBS",
						"plan_type": "HMO",
						"member_number": "123",
						"effective_date": "2023-01-01",
						"group_number": "12345",
						"bin": "",
						"pcn": ""
					},
					"rx_insurance": {
						"name": "",
						"plan_type": "",
						"member_number": "",
						"group_number": "",
						"bin": "",
						"pcn": ""
					}
				},
				"lap": {
					"first_name": "",
					"last_name": "",
					"address": {
						"address_1": "",
						"city": "",
						"state": "",
						"zip_code": "",
						"address_2": ""
					},
					"phone": ""
				},
				"enrolled_by": "patient",
				"phone_type": "Home",
				"email": "john.doe@example.com",
				"email_opt_in": "N",
				"member_id": "1145725528"
			},
			"provider_data": {
				"primary": [
					{
						"provider_id": "500011",
						"npi": "0000000006"
					}
				],
				"secondary": [
					{
						"provider_id": "",
						"npi": ""
					}
				]
			},
			"patient_lap": {
				"first_name": "",
				"last_name": "",
				"address": {
					"address_1": "",
					"city": "",
					"state": "",
					"zip_code": "",
					"address_2": ""
				},
				"phone": ""
			},
			"patient_provider_data": {
				"primary": [
					{
						"first_name": "John",
						"npi": "0000000006",
						"last_name": "Doe",
						"phones": {
							"phone": "1234567890"
						},
						"address": {
							"address1": "123 Main St",
							"address2": "",
							"city": "Newport",
							"state": "CA",
							"zip_code": "11111"
						}
					}
				],
				"secondary": [
					{
						"practice_name": "",
						"npi": "",
						"phones": {
							"phone": ""
						},
						"address": {
							"address1": "",
							"address2": "",
							"city": "",
							"state": "",
							"zip_code": ""
						}
					}
				]
			},
			"patient_commercial_insurance": {
				"medical_insurance": {
					"name": "BCBS",
					"plan_type": "HMO",
					"member_number": "123",
					"effective_date": "2023-01-01",
					"group_number": "12345",
					"bin": "",
					"pcn": ""
				},
				"rx_insurance": {
					"name": "",
					"plan_type": "",
					"member_number": "",
					"group_number": "",
					"bin": "",
					"pcn": ""
				}
			},
			"patient_benefits_amounts": {
				"current_period": {
					"total_amount_drug": 15000,
					"total_amount_drug_admin": 1500,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1500,
					"used_amount_drug": 0,
					"used_amount_drug_admin": 0,
					"use_count_drug": 0,
					"use_count_drug_admin": 0
				},
				"prior_period": {
					"total_amount_drug": 15000,
					"total_amount_drug_admin": 1500,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1500,
					"used_amount_drug": 0,
					"used_amount_drug_admin": 0,
					"use_count_drug": 0,
					"use_count_drug_admin": 0
				}
			},
			"card_data": {},
			"verification_data": {
				"request": {
					"PatientPersonalInfo": {
						"FirstName": "John",
						"LastName": "Doe",
						"DateOfBirth": "2002-11-14",
						"Gender": "Male",
						"City": "Newport",
						"State": "CA",
						"Zipcode": "11111",
						"Email": "john.doe@example.com",
						"PhoneNumber": "(123) 456-7890"
					},
					"PatientMedicalInsurance": {
						"name": "BCBS",
						"plan_type": "HMO",
						"member_number": "123",
						"effective_date": "2023-01-01",
						"group_number": "12345",
						"bin": "",
						"pcn": ""
					},
					"PatientPharmacyInsurance": {
						"payer_name": "",
						"payer_type": "",
						"plan_bin": "",
						"plan_pcn": "",
						"plan_group": "",
						"plan_id": "",
						"plan_start_date": "",
						"plan_end_date": ""
					},
					"CardRequestInfo": {
						"Type": "Xolair_WEB"
					}
				},
				"response": {
					"CardResponseInfo": {
						"MemberId": "1145725528",
						"Bin": "123456",
						"Pcn": "pcn",
						"Group": "group",
						"AllowableUses": "999",
						"BenefitAmount": "15000",
						"Status": "Inactive"
					},
					"TransactionInfo": {
						"TransactionId": "e2f07b01-02e0-4bf3-85a0-06d5c6bfeda8",
						"TransactionCreatedDateTime": "2023-11-17T18:08:05.941Z",
						"EnrollmentStatus": "Not Determined"
					}
				}
			},
			"credentials_id": "1145725528",
			"Enrollment End Date": "2024-12-31",
			"Enrollment Status Reason": ""
		},
		{
			"Member ID": "1145725529",
			"First Name": "Jane",
			"Last Name": "Smith",
			"Date of Birth": "1988-03-22",
			"Enrollment Status": "Active",
			"Prior Member ID": "1234567890",
			"Gender": "Female",
			"Drug Patient": "N",
			"Drug Indication": "NA",
			"Drug Admin Patient": "Y",
			"Drug Admin Indication": "Indication Admin",
			"Original Enrollment Date Drug": "2022-08-01",
			"Original Enrollment Date Drug Admin": "2022-08-01",
			"Current Enrollment Date Drug": "",
			"Current Enrollment Date Drug Admin": "2024-01-01",
			"Enrollment Source": "provider",
			"Address": "456 Elm St",
			"City": "Springfield",
			"State": "IL",
			"Zipcode": "62704",
			"Phone": "(217) 555-1234",
			"Email": "jane.smith@example.com",
			"Database ID": 2004643,
			"Card Pii": "",
			"Eligibility Data": {
				"drug": {
					"answer_01": "no",
					"answer_02": "no",
					"answer_03": "0",
					"answer_04": "no",
					"answer_05": "yes",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "disagree",
					"answer_18": "disagree"
				},
				"admin": {
					"answer_01": "yes",
					"answer_02": "yes",
					"answer_03": "2",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				}
			},
			"Medicare": "",
			"patient_enrollment": {
				"original_enrollment_date": "2022-08-01",
				"enrollment_date": "2022-08-01",
				"first_name": "Jane",
				"last_name": "Smith",
				"date_of_birth": "1988-03-22",
				"gender": "Female",
				"request_card": "n",
				"phone": "(217) 555-1234",
				"address": {
					"address_1": "456 Elm St",
					"city": "Springfield",
					"state": "IL",
					"zip_code": "62704",
					"address_2": ""
				},
				"commercial_insurance": {
					"medical_insurance": {
						"name": "Aetna",
						"plan_type": "PPO",
						"member_number": "456",
						"effective_date": "2022-08-01",
						"group_number": "67890",
						"bin": "",
						"pcn": ""
					},
					"rx_insurance": {
						"name": "CVS Caremark",
						"plan_type": "Rx",
						"member_number": "789",
						"group_number": "98765",
						"bin": "987654",
						"pcn": "pcn"
					}
				},
				"lap": {
					"first_name": "",
					"last_name": "",
					"address": {
						"address_1": "",
						"city": "",
						"state": "",
						"zip_code": "",
						"address_2": ""
					},
					"phone": ""
				},
				"enrolled_by": "provider",
				"phone_type": "Mobile",
				"email": "jane.smith@example.com",
				"email_opt_in": "Y",
				"member_id": "1145725529"
			},
			"provider_data": {
				"primary": [
					{
						"provider_id": "500012",
						"npi": "0000000007"
					}
				],
				"secondary": [
					{
						"provider_id": "500013",
						"npi": "0000000008"
					}
				]
			},
			"patient_lap": {
				"first_name": "",
				"last_name": "",
				"address": {
					"address_1": "",
					"city": "",
					"state": "",
					"zip_code": "",
					"address_2": ""
				},
				"phone": ""
			},
			"patient_provider_data": {
				"primary": [
					{
						"first_name": "James",
						"npi": "0000000007",
						"last_name": "Brown",
						"phones": {
							"phone": "2175551234"
						},
						"address": {
							"address1": "456 Elm St",
							"address2": "",
							"city": "Springfield",
							"state": "IL",
							"zip_code": "62704"
						}
					}
				],
				"secondary": [
					{
						"practice_name": "Clinic 2",
						"npi": "0000000008",
						"phones": {
							"phone": "2175554321"
						},
						"address": {
							"address1": "789 Oak St",
							"address2": "",
							"city": "Springfield",
							"state": "IL",
							"zip_code": "62701"
						}
					}
				]
			},
			"patient_commercial_insurance": {
				"medical_insurance": {
					"name": "Aetna",
					"plan_type": "PPO",
					"member_number": "456",
					"effective_date": "2022-08-01",
					"group_number": "67890",
					"bin": "",
					"pcn": ""
				},
				"rx_insurance": {
					"name": "CVS Caremark",
					"plan_type": "Rx",
					"member_number": "789",
					"group_number": "98765",
					"bin": "987654",
					"pcn": "pcn"
				}
			},
			"patient_benefits_amounts": {
				"current_period": {
					"total_amount_drug": 20000,
					"total_amount_drug_admin": 2500,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1000,
					"used_amount_drug": 5000,
					"used_amount_drug_admin": 1500,
					"use_count_drug": 3,
					"use_count_drug_admin": 2
				},
				"prior_period": {
					"total_amount_drug": 20000,
					"total_amount_drug_admin": 2500,
					"balance_amount_drug": 10000,
					"balance_amount_drug_admin": 500,
					"used_amount_drug": 10000,
					"used_amount_drug_admin": 2000,
					"use_count_drug": 6,
					"use_count_drug_admin": 4
				}
			},
			"card_data": {},
			"verification_data": {
				"request": {
					"PatientPersonalInfo": {
						"FirstName": "Jane",
						"LastName": "Smith",
						"DateOfBirth": "1988-03-22",
						"Gender": "Female",
						"City": "Springfield",
						"State": "IL",
						"Zipcode": "62704",
						"Email": "jane.smith@example.com",
						"PhoneNumber": "(217) 555-1234"
					},
					"PatientMedicalInsurance": {
						"name": "Aetna",
						"plan_type": "PPO",
						"member_number": "456",
						"effective_date": "2022-08-01",
						"group_number": "67890",
						"bin": "",
						"pcn": ""
					},
					"PatientPharmacyInsurance": {
						"payer_name": "CVS Caremark",
						"payer_type": "Rx",
						"plan_bin": "987654",
						"plan_pcn": "pcn",
						"plan_group": "98765",
						"plan_id": "789",
						"plan_start_date": "2022-08-01",
						"plan_end_date": ""
					},
					"CardRequestInfo": {
						"Type": "Xolair_WEB"
					}
				},
				"response": {
					"CardResponseInfo": {
						"MemberId": "1145725529",
						"Bin": "987654",
						"Pcn": "pcn",
						"Group": "group",
						"AllowableUses": "999",
						"BenefitAmount": "20000",
						"Status": "Active"
					},
					"TransactionInfo": {
						"TransactionId": "e3f07b01-02e0-4bf3-85a0-06d5c6bfeda8",
						"TransactionCreatedDateTime": "2023-11-17T18:08:05.941Z",
						"EnrollmentStatus": "Determined"
					}
				}
			},
			"credentials_id": "1145725529",
			"Enrollment End Date": "2025-12-31",
			"Enrollment Status Reason": "Eligibility Confirmed"
		},
		{
			"Member ID": "1145725530",
			"First Name": "Alice",
			"Last Name": "Johnson",
			"Date of Birth": "1990-05-15",
			"Enrollment Status": "Expired",
			"Prior Member ID": "",
			"Gender": "Female",
			"Drug Patient": "Y",
			"Drug Indication": "Indication Drug",
			"Drug Admin Patient": "Y",
			"Drug Admin Indication": "Indication Admin",
			"Original Enrollment Date Drug": "2021-03-10",
			"Original Enrollment Date Drug Admin": "2021-03-10",
			"Current Enrollment Date Drug": "2022-03-10",
			"Current Enrollment Date Drug Admin": "2022-03-10",
			"Enrollment Source": "self",
			"Address": "789 Pine St",
			"City": "Springfield",
			"State": "IL",
			"Zipcode": "62701",
			"Phone": "(217) 555-9876",
			"Email": "alice.johnson@example.com",
			"Database ID": 3005754,
			"Card Pii": "",
			"Eligibility Data": {
				"drug": {
					"answer_01": "yes",
					"answer_02": "no",
					"answer_03": "1",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "disagree",
					"answer_18": "disagree"
				},
				"admin": {
					"answer_01": "no",
					"answer_02": "yes",
					"answer_03": "0",
					"answer_04": "no",
					"answer_05": "yes",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				}
			},
			"Medicare": "",
			"patient_enrollment": {
				"original_enrollment_date": "2021-03-10",
				"enrollment_date": "2022-03-10",
				"first_name": "Alice",
				"last_name": "Johnson",
				"date_of_birth": "1990-05-15",
				"gender": "Female",
				"request_card": "n",
				"phone": "(217) 555-9876",
				"address": {
					"address_1": "789 Pine St",
					"city": "Springfield",
					"state": "IL",
					"zip_code": "62701",
					"address_2": ""
				},
				"commercial_insurance": {
					"medical_insurance": {
						"name": "UnitedHealthcare",
						"plan_type": "HMO",
						"member_number": "654",
						"effective_date": "2021-03-10",
						"group_number": "54321",
						"bin": "",
						"pcn": ""
					},
					"rx_insurance": {
						"name": "OptumRx",
						"plan_type": "Rx",
						"member_number": "321",
						"group_number": "13579",
						"bin": "135791",
						"pcn": "pcn"
					}
				},
				"lap": {
					"first_name": "",
					"last_name": "",
					"address": {
						"address_1": "",
						"city": "",
						"state": "",
						"zip_code": "",
						"address_2": ""
					},
					"phone": ""
				},
				"enrolled_by": "self",
				"phone_type": "Home",
				"email": "alice.johnson@example.com",
				"email_opt_in": "N",
				"member_id": "1145725530"
			},
			"provider_data": {
				"primary": [
					{
						"provider_id": "500014",
						"npi": "0000000009"
					}
				],
				"secondary": []
			},
			"patient_lap": {
				"first_name": "",
				"last_name": "",
				"address": {
					"address_1": "",
					"city": "",
					"state": "",
					"zip_code": "",
					"address_2": ""
				},
				"phone": ""
			},
			"patient_provider_data": {
				"primary": [
					{
						"first_name": "Linda",
						"npi": "0000000009",
						"last_name": "White",
						"phones": {
							"phone": "2175559876"
						},
						"address": {
							"address1": "789 Pine St",
							"address2": "",
							"city": "Springfield",
							"state": "IL",
							"zip_code": "62701"
						}
					}
				],
				"secondary": []
			},
			"patient_commercial_insurance": {
				"medical_insurance": {
					"name": "UnitedHealthcare",
					"plan_type": "HMO",
					"member_number": "654",
					"effective_date": "2021-03-10",
					"group_number": "54321",
					"bin": "",
					"pcn": ""
				},
				"rx_insurance": {
					"name": "OptumRx",
					"plan_type": "Rx",
					"member_number": "321",
					"group_number": "13579",
					"bin": "135791",
					"pcn": "pcn"
				}
			},
			"patient_benefits_amounts": {
				"current_period": {
					"total_amount_drug": 18000,
					"total_amount_drug_admin": 2000,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1500,
					"used_amount_drug": 3000,
					"used_amount_drug_admin": 500,
					"use_count_drug": 1,
					"use_count_drug_admin": 1
				},
				"prior_period": {
					"total_amount_drug": 18000,
					"total_amount_drug_admin": 2000,
					"balance_amount_drug": 9000,
					"balance_amount_drug_admin": 1000,
					"used_amount_drug": 9000,
					"used_amount_drug_admin": 1000,
					"use_count_drug": 3,
					"use_count_drug_admin": 2
				}
			},
			"card_data": {},
			"verification_data": {
				"request": {
					"PatientPersonalInfo": {
						"FirstName": "Alice",
						"LastName": "Johnson",
						"DateOfBirth": "1990-05-15",
						"Gender": "Female",
						"City": "Springfield",
						"State": "IL",
						"Zipcode": "62701",
						"Email": "alice.johnson@example.com",
						"PhoneNumber": "(217) 555-9876"
					},
					"PatientMedicalInsurance": {
						"name": "UnitedHealthcare",
						"plan_type": "HMO",
						"member_number": "654",
						"effective_date": "2021-03-10",
						"group_number": "54321",
						"bin": "",
						"pcn": ""
					},
					"PatientPharmacyInsurance": {
						"payer_name": "OptumRx",
						"payer_type": "Rx",
						"plan_bin": "135791",
						"plan_pcn": "pcn",
						"plan_group": "13579",
						"plan_id": "321",
						"plan_start_date": "2021-03-10",
						"plan_end_date": ""
					},
					"CardRequestInfo": {
						"Type": "Xolair_WEB"
					}
				},
				"response": {
					"CardResponseInfo": {
						"MemberId": "1145725530",
						"Bin": "135791",
						"Pcn": "pcn",
						"Group": "group",
						"AllowableUses": "999",
						"BenefitAmount": "18000",
						"Status": "Expired"
					},
					"TransactionInfo": {
						"TransactionId": "f4a07b01-02e0-4bf3-85a0-06d5c6bfeda8",
						"TransactionCreatedDateTime": "2023-12-17T18:08:05.941Z",
						"EnrollmentStatus": "Expired"
					}
				}
			},
			"credentials_id": "1145725530",
			"Enrollment End Date": "2023-12-31",
			"Enrollment Status Reason": "Eligibility Expired"
		},
		{
			"Member ID": "1145725528",
			"First Name": "John",
			"Last Name": "Doe",
			"Date of Birth": "2002-11-14",
			"Enrollment Status": "Pending",
			"Prior Member ID": "",
			"Gender": "Male",
			"Drug Patient": "Y",
			"Drug Indication": "Indication Drug",
			"Drug Admin Patient": "Y",
			"Drug Admin Indication": "Indication Admin",
			"Original Enrollment Date Drug": "2023-11-17",
			"Original Enrollment Date Drug Admin": "2023-11-17",
			"Current Enrollment Date Drug": "2024-01-01",
			"Current Enrollment Date Drug Admin": "2024-01-01",
			"Enrollment Source": "patient",
			"Address": "123 Main St",
			"City": "Newport",
			"State": "CA",
			"Zipcode": "11111",
			"Phone": "(123) 456-7890",
			"Email": "john.doe@example.com",
			"Database ID": 2004642,
			"Card Pii": "",
			"Eligibility Data": {
				"drug": {
					"answer_01": "yes",
					"answer_02": "yes",
					"answer_03": "1",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "CA",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				},
				"admin": {
					"answer_01": "yes",
					"answer_02": "yes",
					"answer_03": "1",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "CA",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				}
			},
			"Medicare": "",
			"patient_enrollment": {
				"original_enrollment_date": "2023-11-17",
				"enrollment_date": "2023-11-17",
				"first_name": "John",
				"last_name": "Doe",
				"date_of_birth": "2002-11-14",
				"gender": "Male",
				"request_card": "n",
				"phone": "(123) 456-7890",
				"address": {
					"address_1": "123 Main St",
					"city": "Newport",
					"state": "CA",
					"zip_code": "11111",
					"address_2": ""
				},
				"commercial_insurance": {
					"medical_insurance": {
						"name": "BCBS",
						"plan_type": "HMO",
						"member_number": "123",
						"effective_date": "2023-01-01",
						"group_number": "12345",
						"bin": "",
						"pcn": ""
					},
					"rx_insurance": {
						"name": "",
						"plan_type": "",
						"member_number": "",
						"group_number": "",
						"bin": "",
						"pcn": ""
					}
				},
				"lap": {
					"first_name": "",
					"last_name": "",
					"address": {
						"address_1": "",
						"city": "",
						"state": "",
						"zip_code": "",
						"address_2": ""
					},
					"phone": ""
				},
				"enrolled_by": "patient",
				"phone_type": "Home",
				"email": "john.doe@example.com",
				"email_opt_in": "N",
				"member_id": "1145725528"
			},
			"provider_data": {
				"primary": [
					{
						"provider_id": "500011",
						"npi": "0000000006"
					}
				],
				"secondary": [
					{
						"provider_id": "",
						"npi": ""
					}
				]
			},
			"patient_lap": {
				"first_name": "",
				"last_name": "",
				"address": {
					"address_1": "",
					"city": "",
					"state": "",
					"zip_code": "",
					"address_2": ""
				},
				"phone": ""
			},
			"patient_provider_data": {
				"primary": [
					{
						"first_name": "John",
						"npi": "0000000006",
						"last_name": "Doe",
						"phones": {
							"phone": "1234567890"
						},
						"address": {
							"address1": "123 Main St",
							"address2": "",
							"city": "Newport",
							"state": "CA",
							"zip_code": "11111"
						}
					}
				],
				"secondary": [
					{
						"practice_name": "",
						"npi": "",
						"phones": {
							"phone": ""
						},
						"address": {
							"address1": "",
							"address2": "",
							"city": "",
							"state": "",
							"zip_code": ""
						}
					}
				]
			},
			"patient_commercial_insurance": {
				"medical_insurance": {
					"name": "BCBS",
					"plan_type": "HMO",
					"member_number": "123",
					"effective_date": "2023-01-01",
					"group_number": "12345",
					"bin": "",
					"pcn": ""
				},
				"rx_insurance": {
					"name": "",
					"plan_type": "",
					"member_number": "",
					"group_number": "",
					"bin": "",
					"pcn": ""
				}
			},
			"patient_benefits_amounts": {
				"current_period": {
					"total_amount_drug": 15000,
					"total_amount_drug_admin": 1500,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1500,
					"used_amount_drug": 0,
					"used_amount_drug_admin": 0,
					"use_count_drug": 0,
					"use_count_drug_admin": 0
				},
				"prior_period": {
					"total_amount_drug": 15000,
					"total_amount_drug_admin": 1500,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1500,
					"used_amount_drug": 0,
					"used_amount_drug_admin": 0,
					"use_count_drug": 0,
					"use_count_drug_admin": 0
				}
			},
			"card_data": {},
			"verification_data": {
				"request": {
					"PatientPersonalInfo": {
						"FirstName": "John",
						"LastName": "Doe",
						"DateOfBirth": "2002-11-14",
						"Gender": "Male",
						"City": "Newport",
						"State": "CA",
						"Zipcode": "11111",
						"Email": "john.doe@example.com",
						"PhoneNumber": "(123) 456-7890"
					},
					"PatientMedicalInsurance": {
						"name": "BCBS",
						"plan_type": "HMO",
						"member_number": "123",
						"effective_date": "2023-01-01",
						"group_number": "12345",
						"bin": "",
						"pcn": ""
					},
					"PatientPharmacyInsurance": {
						"payer_name": "",
						"payer_type": "",
						"plan_bin": "",
						"plan_pcn": "",
						"plan_group": "",
						"plan_id": "",
						"plan_start_date": "",
						"plan_end_date": ""
					},
					"CardRequestInfo": {
						"Type": "Xolair_WEB"
					}
				},
				"response": {
					"CardResponseInfo": {
						"MemberId": "1145725528",
						"Bin": "123456",
						"Pcn": "pcn",
						"Group": "group",
						"AllowableUses": "999",
						"BenefitAmount": "15000",
						"Status": "Inactive"
					},
					"TransactionInfo": {
						"TransactionId": "e2f07b01-02e0-4bf3-85a0-06d5c6bfeda8",
						"TransactionCreatedDateTime": "2023-11-17T18:08:05.941Z",
						"EnrollmentStatus": "Not Determined"
					}
				}
			},
			"credentials_id": "1145725528",
			"Enrollment End Date": "2024-12-31",
			"Enrollment Status Reason": ""
		},
		{
			"Member ID": "1145725529",
			"First Name": "Jane",
			"Last Name": "Smith",
			"Date of Birth": "1988-03-22",
			"Enrollment Status": "Active",
			"Prior Member ID": "1234567890",
			"Gender": "Female",
			"Drug Patient": "N",
			"Drug Indication": "NA",
			"Drug Admin Patient": "Y",
			"Drug Admin Indication": "Indication Admin",
			"Original Enrollment Date Drug": "2022-08-01",
			"Original Enrollment Date Drug Admin": "2022-08-01",
			"Current Enrollment Date Drug": "",
			"Current Enrollment Date Drug Admin": "2024-01-01",
			"Enrollment Source": "provider",
			"Address": "456 Elm St",
			"City": "Springfield",
			"State": "IL",
			"Zipcode": "62704",
			"Phone": "(217) 555-1234",
			"Email": "jane.smith@example.com",
			"Database ID": 2004643,
			"Card Pii": "",
			"Eligibility Data": {
				"drug": {
					"answer_01": "no",
					"answer_02": "no",
					"answer_03": "0",
					"answer_04": "no",
					"answer_05": "yes",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "disagree",
					"answer_18": "disagree"
				},
				"admin": {
					"answer_01": "yes",
					"answer_02": "yes",
					"answer_03": "2",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				}
			},
			"Medicare": "",
			"patient_enrollment": {
				"original_enrollment_date": "2022-08-01",
				"enrollment_date": "2022-08-01",
				"first_name": "Jane",
				"last_name": "Smith",
				"date_of_birth": "1988-03-22",
				"gender": "Female",
				"request_card": "n",
				"phone": "(217) 555-1234",
				"address": {
					"address_1": "456 Elm St",
					"city": "Springfield",
					"state": "IL",
					"zip_code": "62704",
					"address_2": ""
				},
				"commercial_insurance": {
					"medical_insurance": {
						"name": "Aetna",
						"plan_type": "PPO",
						"member_number": "456",
						"effective_date": "2022-08-01",
						"group_number": "67890",
						"bin": "",
						"pcn": ""
					},
					"rx_insurance": {
						"name": "CVS Caremark",
						"plan_type": "Rx",
						"member_number": "789",
						"group_number": "98765",
						"bin": "987654",
						"pcn": "pcn"
					}
				},
				"lap": {
					"first_name": "",
					"last_name": "",
					"address": {
						"address_1": "",
						"city": "",
						"state": "",
						"zip_code": "",
						"address_2": ""
					},
					"phone": ""
				},
				"enrolled_by": "provider",
				"phone_type": "Mobile",
				"email": "jane.smith@example.com",
				"email_opt_in": "Y",
				"member_id": "1145725529"
			},
			"provider_data": {
				"primary": [
					{
						"provider_id": "500012",
						"npi": "0000000007"
					}
				],
				"secondary": [
					{
						"provider_id": "500013",
						"npi": "0000000008"
					}
				]
			},
			"patient_lap": {
				"first_name": "",
				"last_name": "",
				"address": {
					"address_1": "",
					"city": "",
					"state": "",
					"zip_code": "",
					"address_2": ""
				},
				"phone": ""
			},
			"patient_provider_data": {
				"primary": [
					{
						"first_name": "James",
						"npi": "0000000007",
						"last_name": "Brown",
						"phones": {
							"phone": "2175551234"
						},
						"address": {
							"address1": "456 Elm St",
							"address2": "",
							"city": "Springfield",
							"state": "IL",
							"zip_code": "62704"
						}
					}
				],
				"secondary": [
					{
						"practice_name": "Clinic 2",
						"npi": "0000000008",
						"phones": {
							"phone": "2175554321"
						},
						"address": {
							"address1": "789 Oak St",
							"address2": "",
							"city": "Springfield",
							"state": "IL",
							"zip_code": "62701"
						}
					}
				]
			},
			"patient_commercial_insurance": {
				"medical_insurance": {
					"name": "Aetna",
					"plan_type": "PPO",
					"member_number": "456",
					"effective_date": "2022-08-01",
					"group_number": "67890",
					"bin": "",
					"pcn": ""
				},
				"rx_insurance": {
					"name": "CVS Caremark",
					"plan_type": "Rx",
					"member_number": "789",
					"group_number": "98765",
					"bin": "987654",
					"pcn": "pcn"
				}
			},
			"patient_benefits_amounts": {
				"current_period": {
					"total_amount_drug": 20000,
					"total_amount_drug_admin": 2500,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1000,
					"used_amount_drug": 5000,
					"used_amount_drug_admin": 1500,
					"use_count_drug": 3,
					"use_count_drug_admin": 2
				},
				"prior_period": {
					"total_amount_drug": 20000,
					"total_amount_drug_admin": 2500,
					"balance_amount_drug": 10000,
					"balance_amount_drug_admin": 500,
					"used_amount_drug": 10000,
					"used_amount_drug_admin": 2000,
					"use_count_drug": 6,
					"use_count_drug_admin": 4
				}
			},
			"card_data": {},
			"verification_data": {
				"request": {
					"PatientPersonalInfo": {
						"FirstName": "Jane",
						"LastName": "Smith",
						"DateOfBirth": "1988-03-22",
						"Gender": "Female",
						"City": "Springfield",
						"State": "IL",
						"Zipcode": "62704",
						"Email": "jane.smith@example.com",
						"PhoneNumber": "(217) 555-1234"
					},
					"PatientMedicalInsurance": {
						"name": "Aetna",
						"plan_type": "PPO",
						"member_number": "456",
						"effective_date": "2022-08-01",
						"group_number": "67890",
						"bin": "",
						"pcn": ""
					},
					"PatientPharmacyInsurance": {
						"payer_name": "CVS Caremark",
						"payer_type": "Rx",
						"plan_bin": "987654",
						"plan_pcn": "pcn",
						"plan_group": "98765",
						"plan_id": "789",
						"plan_start_date": "2022-08-01",
						"plan_end_date": ""
					},
					"CardRequestInfo": {
						"Type": "Xolair_WEB"
					}
				},
				"response": {
					"CardResponseInfo": {
						"MemberId": "1145725529",
						"Bin": "987654",
						"Pcn": "pcn",
						"Group": "group",
						"AllowableUses": "999",
						"BenefitAmount": "20000",
						"Status": "Active"
					},
					"TransactionInfo": {
						"TransactionId": "e3f07b01-02e0-4bf3-85a0-06d5c6bfeda8",
						"TransactionCreatedDateTime": "2023-11-17T18:08:05.941Z",
						"EnrollmentStatus": "Determined"
					}
				}
			},
			"credentials_id": "1145725529",
			"Enrollment End Date": "2025-12-31",
			"Enrollment Status Reason": "Eligibility Confirmed"
		},
		{
			"Member ID": "1145725530",
			"First Name": "Alice",
			"Last Name": "Johnson",
			"Date of Birth": "1990-05-15",
			"Enrollment Status": "Expired",
			"Prior Member ID": "",
			"Gender": "Female",
			"Drug Patient": "Y",
			"Drug Indication": "Indication Drug",
			"Drug Admin Patient": "Y",
			"Drug Admin Indication": "Indication Admin",
			"Original Enrollment Date Drug": "2021-03-10",
			"Original Enrollment Date Drug Admin": "2021-03-10",
			"Current Enrollment Date Drug": "2022-03-10",
			"Current Enrollment Date Drug Admin": "2022-03-10",
			"Enrollment Source": "self",
			"Address": "789 Pine St",
			"City": "Springfield",
			"State": "IL",
			"Zipcode": "62701",
			"Phone": "(217) 555-9876",
			"Email": "alice.johnson@example.com",
			"Database ID": 3005754,
			"Card Pii": "",
			"Eligibility Data": {
				"drug": {
					"answer_01": "yes",
					"answer_02": "no",
					"answer_03": "1",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "disagree",
					"answer_18": "disagree"
				},
				"admin": {
					"answer_01": "no",
					"answer_02": "yes",
					"answer_03": "0",
					"answer_04": "no",
					"answer_05": "yes",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				}
			},
			"Medicare": "",
			"patient_enrollment": {
				"original_enrollment_date": "2021-03-10",
				"enrollment_date": "2022-03-10",
				"first_name": "Alice",
				"last_name": "Johnson",
				"date_of_birth": "1990-05-15",
				"gender": "Female",
				"request_card": "n",
				"phone": "(217) 555-9876",
				"address": {
					"address_1": "789 Pine St",
					"city": "Springfield",
					"state": "IL",
					"zip_code": "62701",
					"address_2": ""
				},
				"commercial_insurance": {
					"medical_insurance": {
						"name": "UnitedHealthcare",
						"plan_type": "HMO",
						"member_number": "654",
						"effective_date": "2021-03-10",
						"group_number": "54321",
						"bin": "",
						"pcn": ""
					},
					"rx_insurance": {
						"name": "OptumRx",
						"plan_type": "Rx",
						"member_number": "321",
						"group_number": "13579",
						"bin": "135791",
						"pcn": "pcn"
					}
				},
				"lap": {
					"first_name": "",
					"last_name": "",
					"address": {
						"address_1": "",
						"city": "",
						"state": "",
						"zip_code": "",
						"address_2": ""
					},
					"phone": ""
				},
				"enrolled_by": "self",
				"phone_type": "Home",
				"email": "alice.johnson@example.com",
				"email_opt_in": "N",
				"member_id": "1145725530"
			},
			"provider_data": {
				"primary": [
					{
						"provider_id": "500014",
						"npi": "0000000009"
					}
				],
				"secondary": []
			},
			"patient_lap": {
				"first_name": "",
				"last_name": "",
				"address": {
					"address_1": "",
					"city": "",
					"state": "",
					"zip_code": "",
					"address_2": ""
				},
				"phone": ""
			},
			"patient_provider_data": {
				"primary": [
					{
						"first_name": "Linda",
						"npi": "0000000009",
						"last_name": "White",
						"phones": {
							"phone": "2175559876"
						},
						"address": {
							"address1": "789 Pine St",
							"address2": "",
							"city": "Springfield",
							"state": "IL",
							"zip_code": "62701"
						}
					}
				],
				"secondary": []
			},
			"patient_commercial_insurance": {
				"medical_insurance": {
					"name": "UnitedHealthcare",
					"plan_type": "HMO",
					"member_number": "654",
					"effective_date": "2021-03-10",
					"group_number": "54321",
					"bin": "",
					"pcn": ""
				},
				"rx_insurance": {
					"name": "OptumRx",
					"plan_type": "Rx",
					"member_number": "321",
					"group_number": "13579",
					"bin": "135791",
					"pcn": "pcn"
				}
			},
			"patient_benefits_amounts": {
				"current_period": {
					"total_amount_drug": 18000,
					"total_amount_drug_admin": 2000,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1500,
					"used_amount_drug": 3000,
					"used_amount_drug_admin": 500,
					"use_count_drug": 1,
					"use_count_drug_admin": 1
				},
				"prior_period": {
					"total_amount_drug": 18000,
					"total_amount_drug_admin": 2000,
					"balance_amount_drug": 9000,
					"balance_amount_drug_admin": 1000,
					"used_amount_drug": 9000,
					"used_amount_drug_admin": 1000,
					"use_count_drug": 3,
					"use_count_drug_admin": 2
				}
			},
			"card_data": {},
			"verification_data": {
				"request": {
					"PatientPersonalInfo": {
						"FirstName": "Alice",
						"LastName": "Johnson",
						"DateOfBirth": "1990-05-15",
						"Gender": "Female",
						"City": "Springfield",
						"State": "IL",
						"Zipcode": "62701",
						"Email": "alice.johnson@example.com",
						"PhoneNumber": "(217) 555-9876"
					},
					"PatientMedicalInsurance": {
						"name": "UnitedHealthcare",
						"plan_type": "HMO",
						"member_number": "654",
						"effective_date": "2021-03-10",
						"group_number": "54321",
						"bin": "",
						"pcn": ""
					},
					"PatientPharmacyInsurance": {
						"payer_name": "OptumRx",
						"payer_type": "Rx",
						"plan_bin": "135791",
						"plan_pcn": "pcn",
						"plan_group": "13579",
						"plan_id": "321",
						"plan_start_date": "2021-03-10",
						"plan_end_date": ""
					},
					"CardRequestInfo": {
						"Type": "Xolair_WEB"
					}
				},
				"response": {
					"CardResponseInfo": {
						"MemberId": "1145725530",
						"Bin": "135791",
						"Pcn": "pcn",
						"Group": "group",
						"AllowableUses": "999",
						"BenefitAmount": "18000",
						"Status": "Expired"
					},
					"TransactionInfo": {
						"TransactionId": "f4a07b01-02e0-4bf3-85a0-06d5c6bfeda8",
						"TransactionCreatedDateTime": "2023-12-17T18:08:05.941Z",
						"EnrollmentStatus": "Expired"
					}
				}
			},
			"credentials_id": "1145725530",
			"Enrollment End Date": "2023-12-31",
			"Enrollment Status Reason": "Eligibility Expired"
		},
		{
			"Member ID": "1145725528",
			"First Name": "John",
			"Last Name": "Doe",
			"Date of Birth": "2002-11-14",
			"Enrollment Status": "Pending",
			"Prior Member ID": "",
			"Gender": "Male",
			"Drug Patient": "Y",
			"Drug Indication": "Indication Drug",
			"Drug Admin Patient": "Y",
			"Drug Admin Indication": "Indication Admin",
			"Original Enrollment Date Drug": "2023-11-17",
			"Original Enrollment Date Drug Admin": "2023-11-17",
			"Current Enrollment Date Drug": "2024-01-01",
			"Current Enrollment Date Drug Admin": "2024-01-01",
			"Enrollment Source": "patient",
			"Address": "123 Main St",
			"City": "Newport",
			"State": "CA",
			"Zipcode": "11111",
			"Phone": "(123) 456-7890",
			"Email": "john.doe@example.com",
			"Database ID": 2004642,
			"Card Pii": "",
			"Eligibility Data": {
				"drug": {
					"answer_01": "yes",
					"answer_02": "yes",
					"answer_03": "1",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "CA",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				},
				"admin": {
					"answer_01": "yes",
					"answer_02": "yes",
					"answer_03": "1",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "CA",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				}
			},
			"Medicare": "",
			"patient_enrollment": {
				"original_enrollment_date": "2023-11-17",
				"enrollment_date": "2023-11-17",
				"first_name": "John",
				"last_name": "Doe",
				"date_of_birth": "2002-11-14",
				"gender": "Male",
				"request_card": "n",
				"phone": "(123) 456-7890",
				"address": {
					"address_1": "123 Main St",
					"city": "Newport",
					"state": "CA",
					"zip_code": "11111",
					"address_2": ""
				},
				"commercial_insurance": {
					"medical_insurance": {
						"name": "BCBS",
						"plan_type": "HMO",
						"member_number": "123",
						"effective_date": "2023-01-01",
						"group_number": "12345",
						"bin": "",
						"pcn": ""
					},
					"rx_insurance": {
						"name": "",
						"plan_type": "",
						"member_number": "",
						"group_number": "",
						"bin": "",
						"pcn": ""
					}
				},
				"lap": {
					"first_name": "",
					"last_name": "",
					"address": {
						"address_1": "",
						"city": "",
						"state": "",
						"zip_code": "",
						"address_2": ""
					},
					"phone": ""
				},
				"enrolled_by": "patient",
				"phone_type": "Home",
				"email": "john.doe@example.com",
				"email_opt_in": "N",
				"member_id": "1145725528"
			},
			"provider_data": {
				"primary": [
					{
						"provider_id": "500011",
						"npi": "0000000006"
					}
				],
				"secondary": [
					{
						"provider_id": "",
						"npi": ""
					}
				]
			},
			"patient_lap": {
				"first_name": "",
				"last_name": "",
				"address": {
					"address_1": "",
					"city": "",
					"state": "",
					"zip_code": "",
					"address_2": ""
				},
				"phone": ""
			},
			"patient_provider_data": {
				"primary": [
					{
						"first_name": "John",
						"npi": "0000000006",
						"last_name": "Doe",
						"phones": {
							"phone": "1234567890"
						},
						"address": {
							"address1": "123 Main St",
							"address2": "",
							"city": "Newport",
							"state": "CA",
							"zip_code": "11111"
						}
					}
				],
				"secondary": [
					{
						"practice_name": "",
						"npi": "",
						"phones": {
							"phone": ""
						},
						"address": {
							"address1": "",
							"address2": "",
							"city": "",
							"state": "",
							"zip_code": ""
						}
					}
				]
			},
			"patient_commercial_insurance": {
				"medical_insurance": {
					"name": "BCBS",
					"plan_type": "HMO",
					"member_number": "123",
					"effective_date": "2023-01-01",
					"group_number": "12345",
					"bin": "",
					"pcn": ""
				},
				"rx_insurance": {
					"name": "",
					"plan_type": "",
					"member_number": "",
					"group_number": "",
					"bin": "",
					"pcn": ""
				}
			},
			"patient_benefits_amounts": {
				"current_period": {
					"total_amount_drug": 15000,
					"total_amount_drug_admin": 1500,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1500,
					"used_amount_drug": 0,
					"used_amount_drug_admin": 0,
					"use_count_drug": 0,
					"use_count_drug_admin": 0
				},
				"prior_period": {
					"total_amount_drug": 15000,
					"total_amount_drug_admin": 1500,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1500,
					"used_amount_drug": 0,
					"used_amount_drug_admin": 0,
					"use_count_drug": 0,
					"use_count_drug_admin": 0
				}
			},
			"card_data": {},
			"verification_data": {
				"request": {
					"PatientPersonalInfo": {
						"FirstName": "John",
						"LastName": "Doe",
						"DateOfBirth": "2002-11-14",
						"Gender": "Male",
						"City": "Newport",
						"State": "CA",
						"Zipcode": "11111",
						"Email": "john.doe@example.com",
						"PhoneNumber": "(123) 456-7890"
					},
					"PatientMedicalInsurance": {
						"name": "BCBS",
						"plan_type": "HMO",
						"member_number": "123",
						"effective_date": "2023-01-01",
						"group_number": "12345",
						"bin": "",
						"pcn": ""
					},
					"PatientPharmacyInsurance": {
						"payer_name": "",
						"payer_type": "",
						"plan_bin": "",
						"plan_pcn": "",
						"plan_group": "",
						"plan_id": "",
						"plan_start_date": "",
						"plan_end_date": ""
					},
					"CardRequestInfo": {
						"Type": "Xolair_WEB"
					}
				},
				"response": {
					"CardResponseInfo": {
						"MemberId": "1145725528",
						"Bin": "123456",
						"Pcn": "pcn",
						"Group": "group",
						"AllowableUses": "999",
						"BenefitAmount": "15000",
						"Status": "Inactive"
					},
					"TransactionInfo": {
						"TransactionId": "e2f07b01-02e0-4bf3-85a0-06d5c6bfeda8",
						"TransactionCreatedDateTime": "2023-11-17T18:08:05.941Z",
						"EnrollmentStatus": "Not Determined"
					}
				}
			},
			"credentials_id": "1145725528",
			"Enrollment End Date": "2024-12-31",
			"Enrollment Status Reason": ""
		},
		{
			"Member ID": "1145725529",
			"First Name": "Jane",
			"Last Name": "Smith",
			"Date of Birth": "1988-03-22",
			"Enrollment Status": "Active",
			"Prior Member ID": "1234567890",
			"Gender": "Female",
			"Drug Patient": "N",
			"Drug Indication": "NA",
			"Drug Admin Patient": "Y",
			"Drug Admin Indication": "Indication Admin",
			"Original Enrollment Date Drug": "2022-08-01",
			"Original Enrollment Date Drug Admin": "2022-08-01",
			"Current Enrollment Date Drug": "",
			"Current Enrollment Date Drug Admin": "2024-01-01",
			"Enrollment Source": "provider",
			"Address": "456 Elm St",
			"City": "Springfield",
			"State": "IL",
			"Zipcode": "62704",
			"Phone": "(217) 555-1234",
			"Email": "jane.smith@example.com",
			"Database ID": 2004643,
			"Card Pii": "",
			"Eligibility Data": {
				"drug": {
					"answer_01": "no",
					"answer_02": "no",
					"answer_03": "0",
					"answer_04": "no",
					"answer_05": "yes",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "disagree",
					"answer_18": "disagree"
				},
				"admin": {
					"answer_01": "yes",
					"answer_02": "yes",
					"answer_03": "2",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				}
			},
			"Medicare": "",
			"patient_enrollment": {
				"original_enrollment_date": "2022-08-01",
				"enrollment_date": "2022-08-01",
				"first_name": "Jane",
				"last_name": "Smith",
				"date_of_birth": "1988-03-22",
				"gender": "Female",
				"request_card": "n",
				"phone": "(217) 555-1234",
				"address": {
					"address_1": "456 Elm St",
					"city": "Springfield",
					"state": "IL",
					"zip_code": "62704",
					"address_2": ""
				},
				"commercial_insurance": {
					"medical_insurance": {
						"name": "Aetna",
						"plan_type": "PPO",
						"member_number": "456",
						"effective_date": "2022-08-01",
						"group_number": "67890",
						"bin": "",
						"pcn": ""
					},
					"rx_insurance": {
						"name": "CVS Caremark",
						"plan_type": "Rx",
						"member_number": "789",
						"group_number": "98765",
						"bin": "987654",
						"pcn": "pcn"
					}
				},
				"lap": {
					"first_name": "",
					"last_name": "",
					"address": {
						"address_1": "",
						"city": "",
						"state": "",
						"zip_code": "",
						"address_2": ""
					},
					"phone": ""
				},
				"enrolled_by": "provider",
				"phone_type": "Mobile",
				"email": "jane.smith@example.com",
				"email_opt_in": "Y",
				"member_id": "1145725529"
			},
			"provider_data": {
				"primary": [
					{
						"provider_id": "500012",
						"npi": "0000000007"
					}
				],
				"secondary": [
					{
						"provider_id": "500013",
						"npi": "0000000008"
					}
				]
			},
			"patient_lap": {
				"first_name": "",
				"last_name": "",
				"address": {
					"address_1": "",
					"city": "",
					"state": "",
					"zip_code": "",
					"address_2": ""
				},
				"phone": ""
			},
			"patient_provider_data": {
				"primary": [
					{
						"first_name": "James",
						"npi": "0000000007",
						"last_name": "Brown",
						"phones": {
							"phone": "2175551234"
						},
						"address": {
							"address1": "456 Elm St",
							"address2": "",
							"city": "Springfield",
							"state": "IL",
							"zip_code": "62704"
						}
					}
				],
				"secondary": [
					{
						"practice_name": "Clinic 2",
						"npi": "0000000008",
						"phones": {
							"phone": "2175554321"
						},
						"address": {
							"address1": "789 Oak St",
							"address2": "",
							"city": "Springfield",
							"state": "IL",
							"zip_code": "62701"
						}
					}
				]
			},
			"patient_commercial_insurance": {
				"medical_insurance": {
					"name": "Aetna",
					"plan_type": "PPO",
					"member_number": "456",
					"effective_date": "2022-08-01",
					"group_number": "67890",
					"bin": "",
					"pcn": ""
				},
				"rx_insurance": {
					"name": "CVS Caremark",
					"plan_type": "Rx",
					"member_number": "789",
					"group_number": "98765",
					"bin": "987654",
					"pcn": "pcn"
				}
			},
			"patient_benefits_amounts": {
				"current_period": {
					"total_amount_drug": 20000,
					"total_amount_drug_admin": 2500,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1000,
					"used_amount_drug": 5000,
					"used_amount_drug_admin": 1500,
					"use_count_drug": 3,
					"use_count_drug_admin": 2
				},
				"prior_period": {
					"total_amount_drug": 20000,
					"total_amount_drug_admin": 2500,
					"balance_amount_drug": 10000,
					"balance_amount_drug_admin": 500,
					"used_amount_drug": 10000,
					"used_amount_drug_admin": 2000,
					"use_count_drug": 6,
					"use_count_drug_admin": 4
				}
			},
			"card_data": {},
			"verification_data": {
				"request": {
					"PatientPersonalInfo": {
						"FirstName": "Jane",
						"LastName": "Smith",
						"DateOfBirth": "1988-03-22",
						"Gender": "Female",
						"City": "Springfield",
						"State": "IL",
						"Zipcode": "62704",
						"Email": "jane.smith@example.com",
						"PhoneNumber": "(217) 555-1234"
					},
					"PatientMedicalInsurance": {
						"name": "Aetna",
						"plan_type": "PPO",
						"member_number": "456",
						"effective_date": "2022-08-01",
						"group_number": "67890",
						"bin": "",
						"pcn": ""
					},
					"PatientPharmacyInsurance": {
						"payer_name": "CVS Caremark",
						"payer_type": "Rx",
						"plan_bin": "987654",
						"plan_pcn": "pcn",
						"plan_group": "98765",
						"plan_id": "789",
						"plan_start_date": "2022-08-01",
						"plan_end_date": ""
					},
					"CardRequestInfo": {
						"Type": "Xolair_WEB"
					}
				},
				"response": {
					"CardResponseInfo": {
						"MemberId": "1145725529",
						"Bin": "987654",
						"Pcn": "pcn",
						"Group": "group",
						"AllowableUses": "999",
						"BenefitAmount": "20000",
						"Status": "Active"
					},
					"TransactionInfo": {
						"TransactionId": "e3f07b01-02e0-4bf3-85a0-06d5c6bfeda8",
						"TransactionCreatedDateTime": "2023-11-17T18:08:05.941Z",
						"EnrollmentStatus": "Determined"
					}
				}
			},
			"credentials_id": "1145725529",
			"Enrollment End Date": "2025-12-31",
			"Enrollment Status Reason": "Eligibility Confirmed"
		},
		{
			"Member ID": "1145725530",
			"First Name": "Alice",
			"Last Name": "Johnson",
			"Date of Birth": "1990-05-15",
			"Enrollment Status": "Expired",
			"Prior Member ID": "",
			"Gender": "Female",
			"Drug Patient": "Y",
			"Drug Indication": "Indication Drug",
			"Drug Admin Patient": "Y",
			"Drug Admin Indication": "Indication Admin",
			"Original Enrollment Date Drug": "2021-03-10",
			"Original Enrollment Date Drug Admin": "2021-03-10",
			"Current Enrollment Date Drug": "2022-03-10",
			"Current Enrollment Date Drug Admin": "2022-03-10",
			"Enrollment Source": "self",
			"Address": "789 Pine St",
			"City": "Springfield",
			"State": "IL",
			"Zipcode": "62701",
			"Phone": "(217) 555-9876",
			"Email": "alice.johnson@example.com",
			"Database ID": 3005754,
			"Card Pii": "",
			"Eligibility Data": {
				"drug": {
					"answer_01": "yes",
					"answer_02": "no",
					"answer_03": "1",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "disagree",
					"answer_18": "disagree"
				},
				"admin": {
					"answer_01": "no",
					"answer_02": "yes",
					"answer_03": "0",
					"answer_04": "no",
					"answer_05": "yes",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				}
			},
			"Medicare": "",
			"patient_enrollment": {
				"original_enrollment_date": "2021-03-10",
				"enrollment_date": "2022-03-10",
				"first_name": "Alice",
				"last_name": "Johnson",
				"date_of_birth": "1990-05-15",
				"gender": "Female",
				"request_card": "n",
				"phone": "(217) 555-9876",
				"address": {
					"address_1": "789 Pine St",
					"city": "Springfield",
					"state": "IL",
					"zip_code": "62701",
					"address_2": ""
				},
				"commercial_insurance": {
					"medical_insurance": {
						"name": "UnitedHealthcare",
						"plan_type": "HMO",
						"member_number": "654",
						"effective_date": "2021-03-10",
						"group_number": "54321",
						"bin": "",
						"pcn": ""
					},
					"rx_insurance": {
						"name": "OptumRx",
						"plan_type": "Rx",
						"member_number": "321",
						"group_number": "13579",
						"bin": "135791",
						"pcn": "pcn"
					}
				},
				"lap": {
					"first_name": "",
					"last_name": "",
					"address": {
						"address_1": "",
						"city": "",
						"state": "",
						"zip_code": "",
						"address_2": ""
					},
					"phone": ""
				},
				"enrolled_by": "self",
				"phone_type": "Home",
				"email": "alice.johnson@example.com",
				"email_opt_in": "N",
				"member_id": "1145725530"
			},
			"provider_data": {
				"primary": [
					{
						"provider_id": "500014",
						"npi": "0000000009"
					}
				],
				"secondary": []
			},
			"patient_lap": {
				"first_name": "",
				"last_name": "",
				"address": {
					"address_1": "",
					"city": "",
					"state": "",
					"zip_code": "",
					"address_2": ""
				},
				"phone": ""
			},
			"patient_provider_data": {
				"primary": [
					{
						"first_name": "Linda",
						"npi": "0000000009",
						"last_name": "White",
						"phones": {
							"phone": "2175559876"
						},
						"address": {
							"address1": "789 Pine St",
							"address2": "",
							"city": "Springfield",
							"state": "IL",
							"zip_code": "62701"
						}
					}
				],
				"secondary": []
			},
			"patient_commercial_insurance": {
				"medical_insurance": {
					"name": "UnitedHealthcare",
					"plan_type": "HMO",
					"member_number": "654",
					"effective_date": "2021-03-10",
					"group_number": "54321",
					"bin": "",
					"pcn": ""
				},
				"rx_insurance": {
					"name": "OptumRx",
					"plan_type": "Rx",
					"member_number": "321",
					"group_number": "13579",
					"bin": "135791",
					"pcn": "pcn"
				}
			},
			"patient_benefits_amounts": {
				"current_period": {
					"total_amount_drug": 18000,
					"total_amount_drug_admin": 2000,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1500,
					"used_amount_drug": 3000,
					"used_amount_drug_admin": 500,
					"use_count_drug": 1,
					"use_count_drug_admin": 1
				},
				"prior_period": {
					"total_amount_drug": 18000,
					"total_amount_drug_admin": 2000,
					"balance_amount_drug": 9000,
					"balance_amount_drug_admin": 1000,
					"used_amount_drug": 9000,
					"used_amount_drug_admin": 1000,
					"use_count_drug": 3,
					"use_count_drug_admin": 2
				}
			},
			"card_data": {},
			"verification_data": {
				"request": {
					"PatientPersonalInfo": {
						"FirstName": "Alice",
						"LastName": "Johnson",
						"DateOfBirth": "1990-05-15",
						"Gender": "Female",
						"City": "Springfield",
						"State": "IL",
						"Zipcode": "62701",
						"Email": "alice.johnson@example.com",
						"PhoneNumber": "(217) 555-9876"
					},
					"PatientMedicalInsurance": {
						"name": "UnitedHealthcare",
						"plan_type": "HMO",
						"member_number": "654",
						"effective_date": "2021-03-10",
						"group_number": "54321",
						"bin": "",
						"pcn": ""
					},
					"PatientPharmacyInsurance": {
						"payer_name": "OptumRx",
						"payer_type": "Rx",
						"plan_bin": "135791",
						"plan_pcn": "pcn",
						"plan_group": "13579",
						"plan_id": "321",
						"plan_start_date": "2021-03-10",
						"plan_end_date": ""
					},
					"CardRequestInfo": {
						"Type": "Xolair_WEB"
					}
				},
				"response": {
					"CardResponseInfo": {
						"MemberId": "1145725530",
						"Bin": "135791",
						"Pcn": "pcn",
						"Group": "group",
						"AllowableUses": "999",
						"BenefitAmount": "18000",
						"Status": "Expired"
					},
					"TransactionInfo": {
						"TransactionId": "f4a07b01-02e0-4bf3-85a0-06d5c6bfeda8",
						"TransactionCreatedDateTime": "2023-12-17T18:08:05.941Z",
						"EnrollmentStatus": "Expired"
					}
				}
			},
			"credentials_id": "1145725530",
			"Enrollment End Date": "2023-12-31",
			"Enrollment Status Reason": "Eligibility Expired"
		},
		{
			"Member ID": "1145725528",
			"First Name": "John",
			"Last Name": "Doe",
			"Date of Birth": "2002-11-14",
			"Enrollment Status": "Pending",
			"Prior Member ID": "",
			"Gender": "Male",
			"Drug Patient": "Y",
			"Drug Indication": "Indication Drug",
			"Drug Admin Patient": "Y",
			"Drug Admin Indication": "Indication Admin",
			"Original Enrollment Date Drug": "2023-11-17",
			"Original Enrollment Date Drug Admin": "2023-11-17",
			"Current Enrollment Date Drug": "2024-01-01",
			"Current Enrollment Date Drug Admin": "2024-01-01",
			"Enrollment Source": "patient",
			"Address": "123 Main St",
			"City": "Newport",
			"State": "CA",
			"Zipcode": "11111",
			"Phone": "(123) 456-7890",
			"Email": "john.doe@example.com",
			"Database ID": 2004642,
			"Card Pii": "",
			"Eligibility Data": {
				"drug": {
					"answer_01": "yes",
					"answer_02": "yes",
					"answer_03": "1",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "CA",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				},
				"admin": {
					"answer_01": "yes",
					"answer_02": "yes",
					"answer_03": "1",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "CA",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				}
			},
			"Medicare": "",
			"patient_enrollment": {
				"original_enrollment_date": "2023-11-17",
				"enrollment_date": "2023-11-17",
				"first_name": "John",
				"last_name": "Doe",
				"date_of_birth": "2002-11-14",
				"gender": "Male",
				"request_card": "n",
				"phone": "(123) 456-7890",
				"address": {
					"address_1": "123 Main St",
					"city": "Newport",
					"state": "CA",
					"zip_code": "11111",
					"address_2": ""
				},
				"commercial_insurance": {
					"medical_insurance": {
						"name": "BCBS",
						"plan_type": "HMO",
						"member_number": "123",
						"effective_date": "2023-01-01",
						"group_number": "12345",
						"bin": "",
						"pcn": ""
					},
					"rx_insurance": {
						"name": "",
						"plan_type": "",
						"member_number": "",
						"group_number": "",
						"bin": "",
						"pcn": ""
					}
				},
				"lap": {
					"first_name": "",
					"last_name": "",
					"address": {
						"address_1": "",
						"city": "",
						"state": "",
						"zip_code": "",
						"address_2": ""
					},
					"phone": ""
				},
				"enrolled_by": "patient",
				"phone_type": "Home",
				"email": "john.doe@example.com",
				"email_opt_in": "N",
				"member_id": "1145725528"
			},
			"provider_data": {
				"primary": [
					{
						"provider_id": "500011",
						"npi": "0000000006"
					}
				],
				"secondary": [
					{
						"provider_id": "",
						"npi": ""
					}
				]
			},
			"patient_lap": {
				"first_name": "",
				"last_name": "",
				"address": {
					"address_1": "",
					"city": "",
					"state": "",
					"zip_code": "",
					"address_2": ""
				},
				"phone": ""
			},
			"patient_provider_data": {
				"primary": [
					{
						"first_name": "John",
						"npi": "0000000006",
						"last_name": "Doe",
						"phones": {
							"phone": "1234567890"
						},
						"address": {
							"address1": "123 Main St",
							"address2": "",
							"city": "Newport",
							"state": "CA",
							"zip_code": "11111"
						}
					}
				],
				"secondary": [
					{
						"practice_name": "",
						"npi": "",
						"phones": {
							"phone": ""
						},
						"address": {
							"address1": "",
							"address2": "",
							"city": "",
							"state": "",
							"zip_code": ""
						}
					}
				]
			},
			"patient_commercial_insurance": {
				"medical_insurance": {
					"name": "BCBS",
					"plan_type": "HMO",
					"member_number": "123",
					"effective_date": "2023-01-01",
					"group_number": "12345",
					"bin": "",
					"pcn": ""
				},
				"rx_insurance": {
					"name": "",
					"plan_type": "",
					"member_number": "",
					"group_number": "",
					"bin": "",
					"pcn": ""
				}
			},
			"patient_benefits_amounts": {
				"current_period": {
					"total_amount_drug": 15000,
					"total_amount_drug_admin": 1500,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1500,
					"used_amount_drug": 0,
					"used_amount_drug_admin": 0,
					"use_count_drug": 0,
					"use_count_drug_admin": 0
				},
				"prior_period": {
					"total_amount_drug": 15000,
					"total_amount_drug_admin": 1500,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1500,
					"used_amount_drug": 0,
					"used_amount_drug_admin": 0,
					"use_count_drug": 0,
					"use_count_drug_admin": 0
				}
			},
			"card_data": {},
			"verification_data": {
				"request": {
					"PatientPersonalInfo": {
						"FirstName": "John",
						"LastName": "Doe",
						"DateOfBirth": "2002-11-14",
						"Gender": "Male",
						"City": "Newport",
						"State": "CA",
						"Zipcode": "11111",
						"Email": "john.doe@example.com",
						"PhoneNumber": "(123) 456-7890"
					},
					"PatientMedicalInsurance": {
						"name": "BCBS",
						"plan_type": "HMO",
						"member_number": "123",
						"effective_date": "2023-01-01",
						"group_number": "12345",
						"bin": "",
						"pcn": ""
					},
					"PatientPharmacyInsurance": {
						"payer_name": "",
						"payer_type": "",
						"plan_bin": "",
						"plan_pcn": "",
						"plan_group": "",
						"plan_id": "",
						"plan_start_date": "",
						"plan_end_date": ""
					},
					"CardRequestInfo": {
						"Type": "Xolair_WEB"
					}
				},
				"response": {
					"CardResponseInfo": {
						"MemberId": "1145725528",
						"Bin": "123456",
						"Pcn": "pcn",
						"Group": "group",
						"AllowableUses": "999",
						"BenefitAmount": "15000",
						"Status": "Inactive"
					},
					"TransactionInfo": {
						"TransactionId": "e2f07b01-02e0-4bf3-85a0-06d5c6bfeda8",
						"TransactionCreatedDateTime": "2023-11-17T18:08:05.941Z",
						"EnrollmentStatus": "Not Determined"
					}
				}
			},
			"credentials_id": "1145725528",
			"Enrollment End Date": "2024-12-31",
			"Enrollment Status Reason": ""
		},
		{
			"Member ID": "1145725529",
			"First Name": "Jane",
			"Last Name": "Smith",
			"Date of Birth": "1988-03-22",
			"Enrollment Status": "Active",
			"Prior Member ID": "1234567890",
			"Gender": "Female",
			"Drug Patient": "N",
			"Drug Indication": "NA",
			"Drug Admin Patient": "Y",
			"Drug Admin Indication": "Indication Admin",
			"Original Enrollment Date Drug": "2022-08-01",
			"Original Enrollment Date Drug Admin": "2022-08-01",
			"Current Enrollment Date Drug": "",
			"Current Enrollment Date Drug Admin": "2024-01-01",
			"Enrollment Source": "provider",
			"Address": "456 Elm St",
			"City": "Springfield",
			"State": "IL",
			"Zipcode": "62704",
			"Phone": "(217) 555-1234",
			"Email": "jane.smith@example.com",
			"Database ID": 2004643,
			"Card Pii": "",
			"Eligibility Data": {
				"drug": {
					"answer_01": "no",
					"answer_02": "no",
					"answer_03": "0",
					"answer_04": "no",
					"answer_05": "yes",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "disagree",
					"answer_18": "disagree"
				},
				"admin": {
					"answer_01": "yes",
					"answer_02": "yes",
					"answer_03": "2",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				}
			},
			"Medicare": "",
			"patient_enrollment": {
				"original_enrollment_date": "2022-08-01",
				"enrollment_date": "2022-08-01",
				"first_name": "Jane",
				"last_name": "Smith",
				"date_of_birth": "1988-03-22",
				"gender": "Female",
				"request_card": "n",
				"phone": "(217) 555-1234",
				"address": {
					"address_1": "456 Elm St",
					"city": "Springfield",
					"state": "IL",
					"zip_code": "62704",
					"address_2": ""
				},
				"commercial_insurance": {
					"medical_insurance": {
						"name": "Aetna",
						"plan_type": "PPO",
						"member_number": "456",
						"effective_date": "2022-08-01",
						"group_number": "67890",
						"bin": "",
						"pcn": ""
					},
					"rx_insurance": {
						"name": "CVS Caremark",
						"plan_type": "Rx",
						"member_number": "789",
						"group_number": "98765",
						"bin": "987654",
						"pcn": "pcn"
					}
				},
				"lap": {
					"first_name": "",
					"last_name": "",
					"address": {
						"address_1": "",
						"city": "",
						"state": "",
						"zip_code": "",
						"address_2": ""
					},
					"phone": ""
				},
				"enrolled_by": "provider",
				"phone_type": "Mobile",
				"email": "jane.smith@example.com",
				"email_opt_in": "Y",
				"member_id": "1145725529"
			},
			"provider_data": {
				"primary": [
					{
						"provider_id": "500012",
						"npi": "0000000007"
					}
				],
				"secondary": [
					{
						"provider_id": "500013",
						"npi": "0000000008"
					}
				]
			},
			"patient_lap": {
				"first_name": "",
				"last_name": "",
				"address": {
					"address_1": "",
					"city": "",
					"state": "",
					"zip_code": "",
					"address_2": ""
				},
				"phone": ""
			},
			"patient_provider_data": {
				"primary": [
					{
						"first_name": "James",
						"npi": "0000000007",
						"last_name": "Brown",
						"phones": {
							"phone": "2175551234"
						},
						"address": {
							"address1": "456 Elm St",
							"address2": "",
							"city": "Springfield",
							"state": "IL",
							"zip_code": "62704"
						}
					}
				],
				"secondary": [
					{
						"practice_name": "Clinic 2",
						"npi": "0000000008",
						"phones": {
							"phone": "2175554321"
						},
						"address": {
							"address1": "789 Oak St",
							"address2": "",
							"city": "Springfield",
							"state": "IL",
							"zip_code": "62701"
						}
					}
				]
			},
			"patient_commercial_insurance": {
				"medical_insurance": {
					"name": "Aetna",
					"plan_type": "PPO",
					"member_number": "456",
					"effective_date": "2022-08-01",
					"group_number": "67890",
					"bin": "",
					"pcn": ""
				},
				"rx_insurance": {
					"name": "CVS Caremark",
					"plan_type": "Rx",
					"member_number": "789",
					"group_number": "98765",
					"bin": "987654",
					"pcn": "pcn"
				}
			},
			"patient_benefits_amounts": {
				"current_period": {
					"total_amount_drug": 20000,
					"total_amount_drug_admin": 2500,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1000,
					"used_amount_drug": 5000,
					"used_amount_drug_admin": 1500,
					"use_count_drug": 3,
					"use_count_drug_admin": 2
				},
				"prior_period": {
					"total_amount_drug": 20000,
					"total_amount_drug_admin": 2500,
					"balance_amount_drug": 10000,
					"balance_amount_drug_admin": 500,
					"used_amount_drug": 10000,
					"used_amount_drug_admin": 2000,
					"use_count_drug": 6,
					"use_count_drug_admin": 4
				}
			},
			"card_data": {},
			"verification_data": {
				"request": {
					"PatientPersonalInfo": {
						"FirstName": "Jane",
						"LastName": "Smith",
						"DateOfBirth": "1988-03-22",
						"Gender": "Female",
						"City": "Springfield",
						"State": "IL",
						"Zipcode": "62704",
						"Email": "jane.smith@example.com",
						"PhoneNumber": "(217) 555-1234"
					},
					"PatientMedicalInsurance": {
						"name": "Aetna",
						"plan_type": "PPO",
						"member_number": "456",
						"effective_date": "2022-08-01",
						"group_number": "67890",
						"bin": "",
						"pcn": ""
					},
					"PatientPharmacyInsurance": {
						"payer_name": "CVS Caremark",
						"payer_type": "Rx",
						"plan_bin": "987654",
						"plan_pcn": "pcn",
						"plan_group": "98765",
						"plan_id": "789",
						"plan_start_date": "2022-08-01",
						"plan_end_date": ""
					},
					"CardRequestInfo": {
						"Type": "Xolair_WEB"
					}
				},
				"response": {
					"CardResponseInfo": {
						"MemberId": "1145725529",
						"Bin": "987654",
						"Pcn": "pcn",
						"Group": "group",
						"AllowableUses": "999",
						"BenefitAmount": "20000",
						"Status": "Active"
					},
					"TransactionInfo": {
						"TransactionId": "e3f07b01-02e0-4bf3-85a0-06d5c6bfeda8",
						"TransactionCreatedDateTime": "2023-11-17T18:08:05.941Z",
						"EnrollmentStatus": "Determined"
					}
				}
			},
			"credentials_id": "1145725529",
			"Enrollment End Date": "2025-12-31",
			"Enrollment Status Reason": "Eligibility Confirmed"
		},
		{
			"Member ID": "1145725530",
			"First Name": "Alice",
			"Last Name": "Johnson",
			"Date of Birth": "1990-05-15",
			"Enrollment Status": "Expired",
			"Prior Member ID": "",
			"Gender": "Female",
			"Drug Patient": "Y",
			"Drug Indication": "Indication Drug",
			"Drug Admin Patient": "Y",
			"Drug Admin Indication": "Indication Admin",
			"Original Enrollment Date Drug": "2021-03-10",
			"Original Enrollment Date Drug Admin": "2021-03-10",
			"Current Enrollment Date Drug": "2022-03-10",
			"Current Enrollment Date Drug Admin": "2022-03-10",
			"Enrollment Source": "self",
			"Address": "789 Pine St",
			"City": "Springfield",
			"State": "IL",
			"Zipcode": "62701",
			"Phone": "(217) 555-9876",
			"Email": "alice.johnson@example.com",
			"Database ID": 3005754,
			"Card Pii": "",
			"Eligibility Data": {
				"drug": {
					"answer_01": "yes",
					"answer_02": "no",
					"answer_03": "1",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "disagree",
					"answer_18": "disagree"
				},
				"admin": {
					"answer_01": "no",
					"answer_02": "yes",
					"answer_03": "0",
					"answer_04": "no",
					"answer_05": "yes",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				}
			},
			"Medicare": "",
			"patient_enrollment": {
				"original_enrollment_date": "2021-03-10",
				"enrollment_date": "2022-03-10",
				"first_name": "Alice",
				"last_name": "Johnson",
				"date_of_birth": "1990-05-15",
				"gender": "Female",
				"request_card": "n",
				"phone": "(217) 555-9876",
				"address": {
					"address_1": "789 Pine St",
					"city": "Springfield",
					"state": "IL",
					"zip_code": "62701",
					"address_2": ""
				},
				"commercial_insurance": {
					"medical_insurance": {
						"name": "UnitedHealthcare",
						"plan_type": "HMO",
						"member_number": "654",
						"effective_date": "2021-03-10",
						"group_number": "54321",
						"bin": "",
						"pcn": ""
					},
					"rx_insurance": {
						"name": "OptumRx",
						"plan_type": "Rx",
						"member_number": "321",
						"group_number": "13579",
						"bin": "135791",
						"pcn": "pcn"
					}
				},
				"lap": {
					"first_name": "",
					"last_name": "",
					"address": {
						"address_1": "",
						"city": "",
						"state": "",
						"zip_code": "",
						"address_2": ""
					},
					"phone": ""
				},
				"enrolled_by": "self",
				"phone_type": "Home",
				"email": "alice.johnson@example.com",
				"email_opt_in": "N",
				"member_id": "1145725530"
			},
			"provider_data": {
				"primary": [
					{
						"provider_id": "500014",
						"npi": "0000000009"
					}
				],
				"secondary": []
			},
			"patient_lap": {
				"first_name": "",
				"last_name": "",
				"address": {
					"address_1": "",
					"city": "",
					"state": "",
					"zip_code": "",
					"address_2": ""
				},
				"phone": ""
			},
			"patient_provider_data": {
				"primary": [
					{
						"first_name": "Linda",
						"npi": "0000000009",
						"last_name": "White",
						"phones": {
							"phone": "2175559876"
						},
						"address": {
							"address1": "789 Pine St",
							"address2": "",
							"city": "Springfield",
							"state": "IL",
							"zip_code": "62701"
						}
					}
				],
				"secondary": []
			},
			"patient_commercial_insurance": {
				"medical_insurance": {
					"name": "UnitedHealthcare",
					"plan_type": "HMO",
					"member_number": "654",
					"effective_date": "2021-03-10",
					"group_number": "54321",
					"bin": "",
					"pcn": ""
				},
				"rx_insurance": {
					"name": "OptumRx",
					"plan_type": "Rx",
					"member_number": "321",
					"group_number": "13579",
					"bin": "135791",
					"pcn": "pcn"
				}
			},
			"patient_benefits_amounts": {
				"current_period": {
					"total_amount_drug": 18000,
					"total_amount_drug_admin": 2000,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1500,
					"used_amount_drug": 3000,
					"used_amount_drug_admin": 500,
					"use_count_drug": 1,
					"use_count_drug_admin": 1
				},
				"prior_period": {
					"total_amount_drug": 18000,
					"total_amount_drug_admin": 2000,
					"balance_amount_drug": 9000,
					"balance_amount_drug_admin": 1000,
					"used_amount_drug": 9000,
					"used_amount_drug_admin": 1000,
					"use_count_drug": 3,
					"use_count_drug_admin": 2
				}
			},
			"card_data": {},
			"verification_data": {
				"request": {
					"PatientPersonalInfo": {
						"FirstName": "Alice",
						"LastName": "Johnson",
						"DateOfBirth": "1990-05-15",
						"Gender": "Female",
						"City": "Springfield",
						"State": "IL",
						"Zipcode": "62701",
						"Email": "alice.johnson@example.com",
						"PhoneNumber": "(217) 555-9876"
					},
					"PatientMedicalInsurance": {
						"name": "UnitedHealthcare",
						"plan_type": "HMO",
						"member_number": "654",
						"effective_date": "2021-03-10",
						"group_number": "54321",
						"bin": "",
						"pcn": ""
					},
					"PatientPharmacyInsurance": {
						"payer_name": "OptumRx",
						"payer_type": "Rx",
						"plan_bin": "135791",
						"plan_pcn": "pcn",
						"plan_group": "13579",
						"plan_id": "321",
						"plan_start_date": "2021-03-10",
						"plan_end_date": ""
					},
					"CardRequestInfo": {
						"Type": "Xolair_WEB"
					}
				},
				"response": {
					"CardResponseInfo": {
						"MemberId": "1145725530",
						"Bin": "135791",
						"Pcn": "pcn",
						"Group": "group",
						"AllowableUses": "999",
						"BenefitAmount": "18000",
						"Status": "Expired"
					},
					"TransactionInfo": {
						"TransactionId": "f4a07b01-02e0-4bf3-85a0-06d5c6bfeda8",
						"TransactionCreatedDateTime": "2023-12-17T18:08:05.941Z",
						"EnrollmentStatus": "Expired"
					}
				}
			},
			"credentials_id": "1145725530",
			"Enrollment End Date": "2023-12-31",
			"Enrollment Status Reason": "Eligibility Expired"
		},
		{
			"Member ID": "1145725528",
			"First Name": "John",
			"Last Name": "Doe",
			"Date of Birth": "2002-11-14",
			"Enrollment Status": "Pending",
			"Prior Member ID": "",
			"Gender": "Male",
			"Drug Patient": "Y",
			"Drug Indication": "Indication Drug",
			"Drug Admin Patient": "Y",
			"Drug Admin Indication": "Indication Admin",
			"Original Enrollment Date Drug": "2023-11-17",
			"Original Enrollment Date Drug Admin": "2023-11-17",
			"Current Enrollment Date Drug": "2024-01-01",
			"Current Enrollment Date Drug Admin": "2024-01-01",
			"Enrollment Source": "patient",
			"Address": "123 Main St",
			"City": "Newport",
			"State": "CA",
			"Zipcode": "11111",
			"Phone": "(123) 456-7890",
			"Email": "john.doe@example.com",
			"Database ID": 2004642,
			"Card Pii": "",
			"Eligibility Data": {
				"drug": {
					"answer_01": "yes",
					"answer_02": "yes",
					"answer_03": "1",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "CA",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				},
				"admin": {
					"answer_01": "yes",
					"answer_02": "yes",
					"answer_03": "1",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "CA",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				}
			},
			"Medicare": "",
			"patient_enrollment": {
				"original_enrollment_date": "2023-11-17",
				"enrollment_date": "2023-11-17",
				"first_name": "John",
				"last_name": "Doe",
				"date_of_birth": "2002-11-14",
				"gender": "Male",
				"request_card": "n",
				"phone": "(123) 456-7890",
				"address": {
					"address_1": "123 Main St",
					"city": "Newport",
					"state": "CA",
					"zip_code": "11111",
					"address_2": ""
				},
				"commercial_insurance": {
					"medical_insurance": {
						"name": "BCBS",
						"plan_type": "HMO",
						"member_number": "123",
						"effective_date": "2023-01-01",
						"group_number": "12345",
						"bin": "",
						"pcn": ""
					},
					"rx_insurance": {
						"name": "",
						"plan_type": "",
						"member_number": "",
						"group_number": "",
						"bin": "",
						"pcn": ""
					}
				},
				"lap": {
					"first_name": "",
					"last_name": "",
					"address": {
						"address_1": "",
						"city": "",
						"state": "",
						"zip_code": "",
						"address_2": ""
					},
					"phone": ""
				},
				"enrolled_by": "patient",
				"phone_type": "Home",
				"email": "john.doe@example.com",
				"email_opt_in": "N",
				"member_id": "1145725528"
			},
			"provider_data": {
				"primary": [
					{
						"provider_id": "500011",
						"npi": "0000000006"
					}
				],
				"secondary": [
					{
						"provider_id": "",
						"npi": ""
					}
				]
			},
			"patient_lap": {
				"first_name": "",
				"last_name": "",
				"address": {
					"address_1": "",
					"city": "",
					"state": "",
					"zip_code": "",
					"address_2": ""
				},
				"phone": ""
			},
			"patient_provider_data": {
				"primary": [
					{
						"first_name": "John",
						"npi": "0000000006",
						"last_name": "Doe",
						"phones": {
							"phone": "1234567890"
						},
						"address": {
							"address1": "123 Main St",
							"address2": "",
							"city": "Newport",
							"state": "CA",
							"zip_code": "11111"
						}
					}
				],
				"secondary": [
					{
						"practice_name": "",
						"npi": "",
						"phones": {
							"phone": ""
						},
						"address": {
							"address1": "",
							"address2": "",
							"city": "",
							"state": "",
							"zip_code": ""
						}
					}
				]
			},
			"patient_commercial_insurance": {
				"medical_insurance": {
					"name": "BCBS",
					"plan_type": "HMO",
					"member_number": "123",
					"effective_date": "2023-01-01",
					"group_number": "12345",
					"bin": "",
					"pcn": ""
				},
				"rx_insurance": {
					"name": "",
					"plan_type": "",
					"member_number": "",
					"group_number": "",
					"bin": "",
					"pcn": ""
				}
			},
			"patient_benefits_amounts": {
				"current_period": {
					"total_amount_drug": 15000,
					"total_amount_drug_admin": 1500,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1500,
					"used_amount_drug": 0,
					"used_amount_drug_admin": 0,
					"use_count_drug": 0,
					"use_count_drug_admin": 0
				},
				"prior_period": {
					"total_amount_drug": 15000,
					"total_amount_drug_admin": 1500,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1500,
					"used_amount_drug": 0,
					"used_amount_drug_admin": 0,
					"use_count_drug": 0,
					"use_count_drug_admin": 0
				}
			},
			"card_data": {},
			"verification_data": {
				"request": {
					"PatientPersonalInfo": {
						"FirstName": "John",
						"LastName": "Doe",
						"DateOfBirth": "2002-11-14",
						"Gender": "Male",
						"City": "Newport",
						"State": "CA",
						"Zipcode": "11111",
						"Email": "john.doe@example.com",
						"PhoneNumber": "(123) 456-7890"
					},
					"PatientMedicalInsurance": {
						"name": "BCBS",
						"plan_type": "HMO",
						"member_number": "123",
						"effective_date": "2023-01-01",
						"group_number": "12345",
						"bin": "",
						"pcn": ""
					},
					"PatientPharmacyInsurance": {
						"payer_name": "",
						"payer_type": "",
						"plan_bin": "",
						"plan_pcn": "",
						"plan_group": "",
						"plan_id": "",
						"plan_start_date": "",
						"plan_end_date": ""
					},
					"CardRequestInfo": {
						"Type": "Xolair_WEB"
					}
				},
				"response": {
					"CardResponseInfo": {
						"MemberId": "1145725528",
						"Bin": "123456",
						"Pcn": "pcn",
						"Group": "group",
						"AllowableUses": "999",
						"BenefitAmount": "15000",
						"Status": "Inactive"
					},
					"TransactionInfo": {
						"TransactionId": "e2f07b01-02e0-4bf3-85a0-06d5c6bfeda8",
						"TransactionCreatedDateTime": "2023-11-17T18:08:05.941Z",
						"EnrollmentStatus": "Not Determined"
					}
				}
			},
			"credentials_id": "1145725528",
			"Enrollment End Date": "2024-12-31",
			"Enrollment Status Reason": ""
		},
		{
			"Member ID": "1145725529",
			"First Name": "Jane",
			"Last Name": "Smith",
			"Date of Birth": "1988-03-22",
			"Enrollment Status": "Active",
			"Prior Member ID": "1234567890",
			"Gender": "Female",
			"Drug Patient": "N",
			"Drug Indication": "NA",
			"Drug Admin Patient": "Y",
			"Drug Admin Indication": "Indication Admin",
			"Original Enrollment Date Drug": "2022-08-01",
			"Original Enrollment Date Drug Admin": "2022-08-01",
			"Current Enrollment Date Drug": "",
			"Current Enrollment Date Drug Admin": "2024-01-01",
			"Enrollment Source": "provider",
			"Address": "456 Elm St",
			"City": "Springfield",
			"State": "IL",
			"Zipcode": "62704",
			"Phone": "(217) 555-1234",
			"Email": "jane.smith@example.com",
			"Database ID": 2004643,
			"Card Pii": "",
			"Eligibility Data": {
				"drug": {
					"answer_01": "no",
					"answer_02": "no",
					"answer_03": "0",
					"answer_04": "no",
					"answer_05": "yes",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "disagree",
					"answer_18": "disagree"
				},
				"admin": {
					"answer_01": "yes",
					"answer_02": "yes",
					"answer_03": "2",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				}
			},
			"Medicare": "",
			"patient_enrollment": {
				"original_enrollment_date": "2022-08-01",
				"enrollment_date": "2022-08-01",
				"first_name": "Jane",
				"last_name": "Smith",
				"date_of_birth": "1988-03-22",
				"gender": "Female",
				"request_card": "n",
				"phone": "(217) 555-1234",
				"address": {
					"address_1": "456 Elm St",
					"city": "Springfield",
					"state": "IL",
					"zip_code": "62704",
					"address_2": ""
				},
				"commercial_insurance": {
					"medical_insurance": {
						"name": "Aetna",
						"plan_type": "PPO",
						"member_number": "456",
						"effective_date": "2022-08-01",
						"group_number": "67890",
						"bin": "",
						"pcn": ""
					},
					"rx_insurance": {
						"name": "CVS Caremark",
						"plan_type": "Rx",
						"member_number": "789",
						"group_number": "98765",
						"bin": "987654",
						"pcn": "pcn"
					}
				},
				"lap": {
					"first_name": "",
					"last_name": "",
					"address": {
						"address_1": "",
						"city": "",
						"state": "",
						"zip_code": "",
						"address_2": ""
					},
					"phone": ""
				},
				"enrolled_by": "provider",
				"phone_type": "Mobile",
				"email": "jane.smith@example.com",
				"email_opt_in": "Y",
				"member_id": "1145725529"
			},
			"provider_data": {
				"primary": [
					{
						"provider_id": "500012",
						"npi": "0000000007"
					}
				],
				"secondary": [
					{
						"provider_id": "500013",
						"npi": "0000000008"
					}
				]
			},
			"patient_lap": {
				"first_name": "",
				"last_name": "",
				"address": {
					"address_1": "",
					"city": "",
					"state": "",
					"zip_code": "",
					"address_2": ""
				},
				"phone": ""
			},
			"patient_provider_data": {
				"primary": [
					{
						"first_name": "James",
						"npi": "0000000007",
						"last_name": "Brown",
						"phones": {
							"phone": "2175551234"
						},
						"address": {
							"address1": "456 Elm St",
							"address2": "",
							"city": "Springfield",
							"state": "IL",
							"zip_code": "62704"
						}
					}
				],
				"secondary": [
					{
						"practice_name": "Clinic 2",
						"npi": "0000000008",
						"phones": {
							"phone": "2175554321"
						},
						"address": {
							"address1": "789 Oak St",
							"address2": "",
							"city": "Springfield",
							"state": "IL",
							"zip_code": "62701"
						}
					}
				]
			},
			"patient_commercial_insurance": {
				"medical_insurance": {
					"name": "Aetna",
					"plan_type": "PPO",
					"member_number": "456",
					"effective_date": "2022-08-01",
					"group_number": "67890",
					"bin": "",
					"pcn": ""
				},
				"rx_insurance": {
					"name": "CVS Caremark",
					"plan_type": "Rx",
					"member_number": "789",
					"group_number": "98765",
					"bin": "987654",
					"pcn": "pcn"
				}
			},
			"patient_benefits_amounts": {
				"current_period": {
					"total_amount_drug": 20000,
					"total_amount_drug_admin": 2500,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1000,
					"used_amount_drug": 5000,
					"used_amount_drug_admin": 1500,
					"use_count_drug": 3,
					"use_count_drug_admin": 2
				},
				"prior_period": {
					"total_amount_drug": 20000,
					"total_amount_drug_admin": 2500,
					"balance_amount_drug": 10000,
					"balance_amount_drug_admin": 500,
					"used_amount_drug": 10000,
					"used_amount_drug_admin": 2000,
					"use_count_drug": 6,
					"use_count_drug_admin": 4
				}
			},
			"card_data": {},
			"verification_data": {
				"request": {
					"PatientPersonalInfo": {
						"FirstName": "Jane",
						"LastName": "Smith",
						"DateOfBirth": "1988-03-22",
						"Gender": "Female",
						"City": "Springfield",
						"State": "IL",
						"Zipcode": "62704",
						"Email": "jane.smith@example.com",
						"PhoneNumber": "(217) 555-1234"
					},
					"PatientMedicalInsurance": {
						"name": "Aetna",
						"plan_type": "PPO",
						"member_number": "456",
						"effective_date": "2022-08-01",
						"group_number": "67890",
						"bin": "",
						"pcn": ""
					},
					"PatientPharmacyInsurance": {
						"payer_name": "CVS Caremark",
						"payer_type": "Rx",
						"plan_bin": "987654",
						"plan_pcn": "pcn",
						"plan_group": "98765",
						"plan_id": "789",
						"plan_start_date": "2022-08-01",
						"plan_end_date": ""
					},
					"CardRequestInfo": {
						"Type": "Xolair_WEB"
					}
				},
				"response": {
					"CardResponseInfo": {
						"MemberId": "1145725529",
						"Bin": "987654",
						"Pcn": "pcn",
						"Group": "group",
						"AllowableUses": "999",
						"BenefitAmount": "20000",
						"Status": "Active"
					},
					"TransactionInfo": {
						"TransactionId": "e3f07b01-02e0-4bf3-85a0-06d5c6bfeda8",
						"TransactionCreatedDateTime": "2023-11-17T18:08:05.941Z",
						"EnrollmentStatus": "Determined"
					}
				}
			},
			"credentials_id": "1145725529",
			"Enrollment End Date": "2025-12-31",
			"Enrollment Status Reason": "Eligibility Confirmed"
		},
		{
			"Member ID": "1145725530",
			"First Name": "Alice",
			"Last Name": "Johnson",
			"Date of Birth": "1990-05-15",
			"Enrollment Status": "Expired",
			"Prior Member ID": "",
			"Gender": "Female",
			"Drug Patient": "Y",
			"Drug Indication": "Indication Drug",
			"Drug Admin Patient": "Y",
			"Drug Admin Indication": "Indication Admin",
			"Original Enrollment Date Drug": "2021-03-10",
			"Original Enrollment Date Drug Admin": "2021-03-10",
			"Current Enrollment Date Drug": "2022-03-10",
			"Current Enrollment Date Drug Admin": "2022-03-10",
			"Enrollment Source": "self",
			"Address": "789 Pine St",
			"City": "Springfield",
			"State": "IL",
			"Zipcode": "62701",
			"Phone": "(217) 555-9876",
			"Email": "alice.johnson@example.com",
			"Database ID": 3005754,
			"Card Pii": "",
			"Eligibility Data": {
				"drug": {
					"answer_01": "yes",
					"answer_02": "no",
					"answer_03": "1",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "disagree",
					"answer_18": "disagree"
				},
				"admin": {
					"answer_01": "no",
					"answer_02": "yes",
					"answer_03": "0",
					"answer_04": "no",
					"answer_05": "yes",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				}
			},
			"Medicare": "",
			"patient_enrollment": {
				"original_enrollment_date": "2021-03-10",
				"enrollment_date": "2022-03-10",
				"first_name": "Alice",
				"last_name": "Johnson",
				"date_of_birth": "1990-05-15",
				"gender": "Female",
				"request_card": "n",
				"phone": "(217) 555-9876",
				"address": {
					"address_1": "789 Pine St",
					"city": "Springfield",
					"state": "IL",
					"zip_code": "62701",
					"address_2": ""
				},
				"commercial_insurance": {
					"medical_insurance": {
						"name": "UnitedHealthcare",
						"plan_type": "HMO",
						"member_number": "654",
						"effective_date": "2021-03-10",
						"group_number": "54321",
						"bin": "",
						"pcn": ""
					},
					"rx_insurance": {
						"name": "OptumRx",
						"plan_type": "Rx",
						"member_number": "321",
						"group_number": "13579",
						"bin": "135791",
						"pcn": "pcn"
					}
				},
				"lap": {
					"first_name": "",
					"last_name": "",
					"address": {
						"address_1": "",
						"city": "",
						"state": "",
						"zip_code": "",
						"address_2": ""
					},
					"phone": ""
				},
				"enrolled_by": "self",
				"phone_type": "Home",
				"email": "alice.johnson@example.com",
				"email_opt_in": "N",
				"member_id": "1145725530"
			},
			"provider_data": {
				"primary": [
					{
						"provider_id": "500014",
						"npi": "0000000009"
					}
				],
				"secondary": []
			},
			"patient_lap": {
				"first_name": "",
				"last_name": "",
				"address": {
					"address_1": "",
					"city": "",
					"state": "",
					"zip_code": "",
					"address_2": ""
				},
				"phone": ""
			},
			"patient_provider_data": {
				"primary": [
					{
						"first_name": "Linda",
						"npi": "0000000009",
						"last_name": "White",
						"phones": {
							"phone": "2175559876"
						},
						"address": {
							"address1": "789 Pine St",
							"address2": "",
							"city": "Springfield",
							"state": "IL",
							"zip_code": "62701"
						}
					}
				],
				"secondary": []
			},
			"patient_commercial_insurance": {
				"medical_insurance": {
					"name": "UnitedHealthcare",
					"plan_type": "HMO",
					"member_number": "654",
					"effective_date": "2021-03-10",
					"group_number": "54321",
					"bin": "",
					"pcn": ""
				},
				"rx_insurance": {
					"name": "OptumRx",
					"plan_type": "Rx",
					"member_number": "321",
					"group_number": "13579",
					"bin": "135791",
					"pcn": "pcn"
				}
			},
			"patient_benefits_amounts": {
				"current_period": {
					"total_amount_drug": 18000,
					"total_amount_drug_admin": 2000,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1500,
					"used_amount_drug": 3000,
					"used_amount_drug_admin": 500,
					"use_count_drug": 1,
					"use_count_drug_admin": 1
				},
				"prior_period": {
					"total_amount_drug": 18000,
					"total_amount_drug_admin": 2000,
					"balance_amount_drug": 9000,
					"balance_amount_drug_admin": 1000,
					"used_amount_drug": 9000,
					"used_amount_drug_admin": 1000,
					"use_count_drug": 3,
					"use_count_drug_admin": 2
				}
			},
			"card_data": {},
			"verification_data": {
				"request": {
					"PatientPersonalInfo": {
						"FirstName": "Alice",
						"LastName": "Johnson",
						"DateOfBirth": "1990-05-15",
						"Gender": "Female",
						"City": "Springfield",
						"State": "IL",
						"Zipcode": "62701",
						"Email": "alice.johnson@example.com",
						"PhoneNumber": "(217) 555-9876"
					},
					"PatientMedicalInsurance": {
						"name": "UnitedHealthcare",
						"plan_type": "HMO",
						"member_number": "654",
						"effective_date": "2021-03-10",
						"group_number": "54321",
						"bin": "",
						"pcn": ""
					},
					"PatientPharmacyInsurance": {
						"payer_name": "OptumRx",
						"payer_type": "Rx",
						"plan_bin": "135791",
						"plan_pcn": "pcn",
						"plan_group": "13579",
						"plan_id": "321",
						"plan_start_date": "2021-03-10",
						"plan_end_date": ""
					},
					"CardRequestInfo": {
						"Type": "Xolair_WEB"
					}
				},
				"response": {
					"CardResponseInfo": {
						"MemberId": "1145725530",
						"Bin": "135791",
						"Pcn": "pcn",
						"Group": "group",
						"AllowableUses": "999",
						"BenefitAmount": "18000",
						"Status": "Expired"
					},
					"TransactionInfo": {
						"TransactionId": "f4a07b01-02e0-4bf3-85a0-06d5c6bfeda8",
						"TransactionCreatedDateTime": "2023-12-17T18:08:05.941Z",
						"EnrollmentStatus": "Expired"
					}
				}
			},
			"credentials_id": "1145725530",
			"Enrollment End Date": "2023-12-31",
			"Enrollment Status Reason": "Eligibility Expired"
		},
		{
			"Member ID": "1145725528",
			"First Name": "John",
			"Last Name": "Doe",
			"Date of Birth": "2002-11-14",
			"Enrollment Status": "Pending",
			"Prior Member ID": "",
			"Gender": "Male",
			"Drug Patient": "Y",
			"Drug Indication": "Indication Drug",
			"Drug Admin Patient": "Y",
			"Drug Admin Indication": "Indication Admin",
			"Original Enrollment Date Drug": "2023-11-17",
			"Original Enrollment Date Drug Admin": "2023-11-17",
			"Current Enrollment Date Drug": "2024-01-01",
			"Current Enrollment Date Drug Admin": "2024-01-01",
			"Enrollment Source": "patient",
			"Address": "123 Main St",
			"City": "Newport",
			"State": "CA",
			"Zipcode": "11111",
			"Phone": "(123) 456-7890",
			"Email": "john.doe@example.com",
			"Database ID": 2004642,
			"Card Pii": "",
			"Eligibility Data": {
				"drug": {
					"answer_01": "yes",
					"answer_02": "yes",
					"answer_03": "1",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "CA",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				},
				"admin": {
					"answer_01": "yes",
					"answer_02": "yes",
					"answer_03": "1",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "CA",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				}
			},
			"Medicare": "",
			"patient_enrollment": {
				"original_enrollment_date": "2023-11-17",
				"enrollment_date": "2023-11-17",
				"first_name": "John",
				"last_name": "Doe",
				"date_of_birth": "2002-11-14",
				"gender": "Male",
				"request_card": "n",
				"phone": "(123) 456-7890",
				"address": {
					"address_1": "123 Main St",
					"city": "Newport",
					"state": "CA",
					"zip_code": "11111",
					"address_2": ""
				},
				"commercial_insurance": {
					"medical_insurance": {
						"name": "BCBS",
						"plan_type": "HMO",
						"member_number": "123",
						"effective_date": "2023-01-01",
						"group_number": "12345",
						"bin": "",
						"pcn": ""
					},
					"rx_insurance": {
						"name": "",
						"plan_type": "",
						"member_number": "",
						"group_number": "",
						"bin": "",
						"pcn": ""
					}
				},
				"lap": {
					"first_name": "",
					"last_name": "",
					"address": {
						"address_1": "",
						"city": "",
						"state": "",
						"zip_code": "",
						"address_2": ""
					},
					"phone": ""
				},
				"enrolled_by": "patient",
				"phone_type": "Home",
				"email": "john.doe@example.com",
				"email_opt_in": "N",
				"member_id": "1145725528"
			},
			"provider_data": {
				"primary": [
					{
						"provider_id": "500011",
						"npi": "0000000006"
					}
				],
				"secondary": [
					{
						"provider_id": "",
						"npi": ""
					}
				]
			},
			"patient_lap": {
				"first_name": "",
				"last_name": "",
				"address": {
					"address_1": "",
					"city": "",
					"state": "",
					"zip_code": "",
					"address_2": ""
				},
				"phone": ""
			},
			"patient_provider_data": {
				"primary": [
					{
						"first_name": "John",
						"npi": "0000000006",
						"last_name": "Doe",
						"phones": {
							"phone": "1234567890"
						},
						"address": {
							"address1": "123 Main St",
							"address2": "",
							"city": "Newport",
							"state": "CA",
							"zip_code": "11111"
						}
					}
				],
				"secondary": [
					{
						"practice_name": "",
						"npi": "",
						"phones": {
							"phone": ""
						},
						"address": {
							"address1": "",
							"address2": "",
							"city": "",
							"state": "",
							"zip_code": ""
						}
					}
				]
			},
			"patient_commercial_insurance": {
				"medical_insurance": {
					"name": "BCBS",
					"plan_type": "HMO",
					"member_number": "123",
					"effective_date": "2023-01-01",
					"group_number": "12345",
					"bin": "",
					"pcn": ""
				},
				"rx_insurance": {
					"name": "",
					"plan_type": "",
					"member_number": "",
					"group_number": "",
					"bin": "",
					"pcn": ""
				}
			},
			"patient_benefits_amounts": {
				"current_period": {
					"total_amount_drug": 15000,
					"total_amount_drug_admin": 1500,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1500,
					"used_amount_drug": 0,
					"used_amount_drug_admin": 0,
					"use_count_drug": 0,
					"use_count_drug_admin": 0
				},
				"prior_period": {
					"total_amount_drug": 15000,
					"total_amount_drug_admin": 1500,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1500,
					"used_amount_drug": 0,
					"used_amount_drug_admin": 0,
					"use_count_drug": 0,
					"use_count_drug_admin": 0
				}
			},
			"card_data": {},
			"verification_data": {
				"request": {
					"PatientPersonalInfo": {
						"FirstName": "John",
						"LastName": "Doe",
						"DateOfBirth": "2002-11-14",
						"Gender": "Male",
						"City": "Newport",
						"State": "CA",
						"Zipcode": "11111",
						"Email": "john.doe@example.com",
						"PhoneNumber": "(123) 456-7890"
					},
					"PatientMedicalInsurance": {
						"name": "BCBS",
						"plan_type": "HMO",
						"member_number": "123",
						"effective_date": "2023-01-01",
						"group_number": "12345",
						"bin": "",
						"pcn": ""
					},
					"PatientPharmacyInsurance": {
						"payer_name": "",
						"payer_type": "",
						"plan_bin": "",
						"plan_pcn": "",
						"plan_group": "",
						"plan_id": "",
						"plan_start_date": "",
						"plan_end_date": ""
					},
					"CardRequestInfo": {
						"Type": "Xolair_WEB"
					}
				},
				"response": {
					"CardResponseInfo": {
						"MemberId": "1145725528",
						"Bin": "123456",
						"Pcn": "pcn",
						"Group": "group",
						"AllowableUses": "999",
						"BenefitAmount": "15000",
						"Status": "Inactive"
					},
					"TransactionInfo": {
						"TransactionId": "e2f07b01-02e0-4bf3-85a0-06d5c6bfeda8",
						"TransactionCreatedDateTime": "2023-11-17T18:08:05.941Z",
						"EnrollmentStatus": "Not Determined"
					}
				}
			},
			"credentials_id": "1145725528",
			"Enrollment End Date": "2024-12-31",
			"Enrollment Status Reason": ""
		},
		{
			"Member ID": "1145725529",
			"First Name": "Jane",
			"Last Name": "Smith",
			"Date of Birth": "1988-03-22",
			"Enrollment Status": "Active",
			"Prior Member ID": "1234567890",
			"Gender": "Female",
			"Drug Patient": "N",
			"Drug Indication": "NA",
			"Drug Admin Patient": "Y",
			"Drug Admin Indication": "Indication Admin",
			"Original Enrollment Date Drug": "2022-08-01",
			"Original Enrollment Date Drug Admin": "2022-08-01",
			"Current Enrollment Date Drug": "",
			"Current Enrollment Date Drug Admin": "2024-01-01",
			"Enrollment Source": "provider",
			"Address": "456 Elm St",
			"City": "Springfield",
			"State": "IL",
			"Zipcode": "62704",
			"Phone": "(217) 555-1234",
			"Email": "jane.smith@example.com",
			"Database ID": 2004643,
			"Card Pii": "",
			"Eligibility Data": {
				"drug": {
					"answer_01": "no",
					"answer_02": "no",
					"answer_03": "0",
					"answer_04": "no",
					"answer_05": "yes",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "disagree",
					"answer_18": "disagree"
				},
				"admin": {
					"answer_01": "yes",
					"answer_02": "yes",
					"answer_03": "2",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				}
			},
			"Medicare": "",
			"patient_enrollment": {
				"original_enrollment_date": "2022-08-01",
				"enrollment_date": "2022-08-01",
				"first_name": "Jane",
				"last_name": "Smith",
				"date_of_birth": "1988-03-22",
				"gender": "Female",
				"request_card": "n",
				"phone": "(217) 555-1234",
				"address": {
					"address_1": "456 Elm St",
					"city": "Springfield",
					"state": "IL",
					"zip_code": "62704",
					"address_2": ""
				},
				"commercial_insurance": {
					"medical_insurance": {
						"name": "Aetna",
						"plan_type": "PPO",
						"member_number": "456",
						"effective_date": "2022-08-01",
						"group_number": "67890",
						"bin": "",
						"pcn": ""
					},
					"rx_insurance": {
						"name": "CVS Caremark",
						"plan_type": "Rx",
						"member_number": "789",
						"group_number": "98765",
						"bin": "987654",
						"pcn": "pcn"
					}
				},
				"lap": {
					"first_name": "",
					"last_name": "",
					"address": {
						"address_1": "",
						"city": "",
						"state": "",
						"zip_code": "",
						"address_2": ""
					},
					"phone": ""
				},
				"enrolled_by": "provider",
				"phone_type": "Mobile",
				"email": "jane.smith@example.com",
				"email_opt_in": "Y",
				"member_id": "1145725529"
			},
			"provider_data": {
				"primary": [
					{
						"provider_id": "500012",
						"npi": "0000000007"
					}
				],
				"secondary": [
					{
						"provider_id": "500013",
						"npi": "0000000008"
					}
				]
			},
			"patient_lap": {
				"first_name": "",
				"last_name": "",
				"address": {
					"address_1": "",
					"city": "",
					"state": "",
					"zip_code": "",
					"address_2": ""
				},
				"phone": ""
			},
			"patient_provider_data": {
				"primary": [
					{
						"first_name": "James",
						"npi": "0000000007",
						"last_name": "Brown",
						"phones": {
							"phone": "2175551234"
						},
						"address": {
							"address1": "456 Elm St",
							"address2": "",
							"city": "Springfield",
							"state": "IL",
							"zip_code": "62704"
						}
					}
				],
				"secondary": [
					{
						"practice_name": "Clinic 2",
						"npi": "0000000008",
						"phones": {
							"phone": "2175554321"
						},
						"address": {
							"address1": "789 Oak St",
							"address2": "",
							"city": "Springfield",
							"state": "IL",
							"zip_code": "62701"
						}
					}
				]
			},
			"patient_commercial_insurance": {
				"medical_insurance": {
					"name": "Aetna",
					"plan_type": "PPO",
					"member_number": "456",
					"effective_date": "2022-08-01",
					"group_number": "67890",
					"bin": "",
					"pcn": ""
				},
				"rx_insurance": {
					"name": "CVS Caremark",
					"plan_type": "Rx",
					"member_number": "789",
					"group_number": "98765",
					"bin": "987654",
					"pcn": "pcn"
				}
			},
			"patient_benefits_amounts": {
				"current_period": {
					"total_amount_drug": 20000,
					"total_amount_drug_admin": 2500,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1000,
					"used_amount_drug": 5000,
					"used_amount_drug_admin": 1500,
					"use_count_drug": 3,
					"use_count_drug_admin": 2
				},
				"prior_period": {
					"total_amount_drug": 20000,
					"total_amount_drug_admin": 2500,
					"balance_amount_drug": 10000,
					"balance_amount_drug_admin": 500,
					"used_amount_drug": 10000,
					"used_amount_drug_admin": 2000,
					"use_count_drug": 6,
					"use_count_drug_admin": 4
				}
			},
			"card_data": {},
			"verification_data": {
				"request": {
					"PatientPersonalInfo": {
						"FirstName": "Jane",
						"LastName": "Smith",
						"DateOfBirth": "1988-03-22",
						"Gender": "Female",
						"City": "Springfield",
						"State": "IL",
						"Zipcode": "62704",
						"Email": "jane.smith@example.com",
						"PhoneNumber": "(217) 555-1234"
					},
					"PatientMedicalInsurance": {
						"name": "Aetna",
						"plan_type": "PPO",
						"member_number": "456",
						"effective_date": "2022-08-01",
						"group_number": "67890",
						"bin": "",
						"pcn": ""
					},
					"PatientPharmacyInsurance": {
						"payer_name": "CVS Caremark",
						"payer_type": "Rx",
						"plan_bin": "987654",
						"plan_pcn": "pcn",
						"plan_group": "98765",
						"plan_id": "789",
						"plan_start_date": "2022-08-01",
						"plan_end_date": ""
					},
					"CardRequestInfo": {
						"Type": "Xolair_WEB"
					}
				},
				"response": {
					"CardResponseInfo": {
						"MemberId": "1145725529",
						"Bin": "987654",
						"Pcn": "pcn",
						"Group": "group",
						"AllowableUses": "999",
						"BenefitAmount": "20000",
						"Status": "Active"
					},
					"TransactionInfo": {
						"TransactionId": "e3f07b01-02e0-4bf3-85a0-06d5c6bfeda8",
						"TransactionCreatedDateTime": "2023-11-17T18:08:05.941Z",
						"EnrollmentStatus": "Determined"
					}
				}
			},
			"credentials_id": "1145725529",
			"Enrollment End Date": "2025-12-31",
			"Enrollment Status Reason": "Eligibility Confirmed"
		},
		{
			"Member ID": "1145725530",
			"First Name": "Alice",
			"Last Name": "Johnson",
			"Date of Birth": "1990-05-15",
			"Enrollment Status": "Expired",
			"Prior Member ID": "",
			"Gender": "Female",
			"Drug Patient": "Y",
			"Drug Indication": "Indication Drug",
			"Drug Admin Patient": "Y",
			"Drug Admin Indication": "Indication Admin",
			"Original Enrollment Date Drug": "2021-03-10",
			"Original Enrollment Date Drug Admin": "2021-03-10",
			"Current Enrollment Date Drug": "2022-03-10",
			"Current Enrollment Date Drug Admin": "2022-03-10",
			"Enrollment Source": "self",
			"Address": "789 Pine St",
			"City": "Springfield",
			"State": "IL",
			"Zipcode": "62701",
			"Phone": "(217) 555-9876",
			"Email": "alice.johnson@example.com",
			"Database ID": 3005754,
			"Card Pii": "",
			"Eligibility Data": {
				"drug": {
					"answer_01": "yes",
					"answer_02": "no",
					"answer_03": "1",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "disagree",
					"answer_18": "disagree"
				},
				"admin": {
					"answer_01": "no",
					"answer_02": "yes",
					"answer_03": "0",
					"answer_04": "no",
					"answer_05": "yes",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				}
			},
			"Medicare": "",
			"patient_enrollment": {
				"original_enrollment_date": "2021-03-10",
				"enrollment_date": "2022-03-10",
				"first_name": "Alice",
				"last_name": "Johnson",
				"date_of_birth": "1990-05-15",
				"gender": "Female",
				"request_card": "n",
				"phone": "(217) 555-9876",
				"address": {
					"address_1": "789 Pine St",
					"city": "Springfield",
					"state": "IL",
					"zip_code": "62701",
					"address_2": ""
				},
				"commercial_insurance": {
					"medical_insurance": {
						"name": "UnitedHealthcare",
						"plan_type": "HMO",
						"member_number": "654",
						"effective_date": "2021-03-10",
						"group_number": "54321",
						"bin": "",
						"pcn": ""
					},
					"rx_insurance": {
						"name": "OptumRx",
						"plan_type": "Rx",
						"member_number": "321",
						"group_number": "13579",
						"bin": "135791",
						"pcn": "pcn"
					}
				},
				"lap": {
					"first_name": "",
					"last_name": "",
					"address": {
						"address_1": "",
						"city": "",
						"state": "",
						"zip_code": "",
						"address_2": ""
					},
					"phone": ""
				},
				"enrolled_by": "self",
				"phone_type": "Home",
				"email": "alice.johnson@example.com",
				"email_opt_in": "N",
				"member_id": "1145725530"
			},
			"provider_data": {
				"primary": [
					{
						"provider_id": "500014",
						"npi": "0000000009"
					}
				],
				"secondary": []
			},
			"patient_lap": {
				"first_name": "",
				"last_name": "",
				"address": {
					"address_1": "",
					"city": "",
					"state": "",
					"zip_code": "",
					"address_2": ""
				},
				"phone": ""
			},
			"patient_provider_data": {
				"primary": [
					{
						"first_name": "Linda",
						"npi": "0000000009",
						"last_name": "White",
						"phones": {
							"phone": "2175559876"
						},
						"address": {
							"address1": "789 Pine St",
							"address2": "",
							"city": "Springfield",
							"state": "IL",
							"zip_code": "62701"
						}
					}
				],
				"secondary": []
			},
			"patient_commercial_insurance": {
				"medical_insurance": {
					"name": "UnitedHealthcare",
					"plan_type": "HMO",
					"member_number": "654",
					"effective_date": "2021-03-10",
					"group_number": "54321",
					"bin": "",
					"pcn": ""
				},
				"rx_insurance": {
					"name": "OptumRx",
					"plan_type": "Rx",
					"member_number": "321",
					"group_number": "13579",
					"bin": "135791",
					"pcn": "pcn"
				}
			},
			"patient_benefits_amounts": {
				"current_period": {
					"total_amount_drug": 18000,
					"total_amount_drug_admin": 2000,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1500,
					"used_amount_drug": 3000,
					"used_amount_drug_admin": 500,
					"use_count_drug": 1,
					"use_count_drug_admin": 1
				},
				"prior_period": {
					"total_amount_drug": 18000,
					"total_amount_drug_admin": 2000,
					"balance_amount_drug": 9000,
					"balance_amount_drug_admin": 1000,
					"used_amount_drug": 9000,
					"used_amount_drug_admin": 1000,
					"use_count_drug": 3,
					"use_count_drug_admin": 2
				}
			},
			"card_data": {},
			"verification_data": {
				"request": {
					"PatientPersonalInfo": {
						"FirstName": "Alice",
						"LastName": "Johnson",
						"DateOfBirth": "1990-05-15",
						"Gender": "Female",
						"City": "Springfield",
						"State": "IL",
						"Zipcode": "62701",
						"Email": "alice.johnson@example.com",
						"PhoneNumber": "(217) 555-9876"
					},
					"PatientMedicalInsurance": {
						"name": "UnitedHealthcare",
						"plan_type": "HMO",
						"member_number": "654",
						"effective_date": "2021-03-10",
						"group_number": "54321",
						"bin": "",
						"pcn": ""
					},
					"PatientPharmacyInsurance": {
						"payer_name": "OptumRx",
						"payer_type": "Rx",
						"plan_bin": "135791",
						"plan_pcn": "pcn",
						"plan_group": "13579",
						"plan_id": "321",
						"plan_start_date": "2021-03-10",
						"plan_end_date": ""
					},
					"CardRequestInfo": {
						"Type": "Xolair_WEB"
					}
				},
				"response": {
					"CardResponseInfo": {
						"MemberId": "1145725530",
						"Bin": "135791",
						"Pcn": "pcn",
						"Group": "group",
						"AllowableUses": "999",
						"BenefitAmount": "18000",
						"Status": "Expired"
					},
					"TransactionInfo": {
						"TransactionId": "f4a07b01-02e0-4bf3-85a0-06d5c6bfeda8",
						"TransactionCreatedDateTime": "2023-12-17T18:08:05.941Z",
						"EnrollmentStatus": "Expired"
					}
				}
			},
			"credentials_id": "1145725530",
			"Enrollment End Date": "2023-12-31",
			"Enrollment Status Reason": "Eligibility Expired"
		},
		{
			"Member ID": "1145725528",
			"First Name": "John",
			"Last Name": "Doe",
			"Date of Birth": "2002-11-14",
			"Enrollment Status": "Pending",
			"Prior Member ID": "",
			"Gender": "Male",
			"Drug Patient": "Y",
			"Drug Indication": "Indication Drug",
			"Drug Admin Patient": "Y",
			"Drug Admin Indication": "Indication Admin",
			"Original Enrollment Date Drug": "2023-11-17",
			"Original Enrollment Date Drug Admin": "2023-11-17",
			"Current Enrollment Date Drug": "2024-01-01",
			"Current Enrollment Date Drug Admin": "2024-01-01",
			"Enrollment Source": "patient",
			"Address": "123 Main St",
			"City": "Newport",
			"State": "CA",
			"Zipcode": "11111",
			"Phone": "(123) 456-7890",
			"Email": "john.doe@example.com",
			"Database ID": 2004642,
			"Card Pii": "",
			"Eligibility Data": {
				"drug": {
					"answer_01": "yes",
					"answer_02": "yes",
					"answer_03": "1",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "CA",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				},
				"admin": {
					"answer_01": "yes",
					"answer_02": "yes",
					"answer_03": "1",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "CA",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				}
			},
			"Medicare": "",
			"patient_enrollment": {
				"original_enrollment_date": "2023-11-17",
				"enrollment_date": "2023-11-17",
				"first_name": "John",
				"last_name": "Doe",
				"date_of_birth": "2002-11-14",
				"gender": "Male",
				"request_card": "n",
				"phone": "(123) 456-7890",
				"address": {
					"address_1": "123 Main St",
					"city": "Newport",
					"state": "CA",
					"zip_code": "11111",
					"address_2": ""
				},
				"commercial_insurance": {
					"medical_insurance": {
						"name": "BCBS",
						"plan_type": "HMO",
						"member_number": "123",
						"effective_date": "2023-01-01",
						"group_number": "12345",
						"bin": "",
						"pcn": ""
					},
					"rx_insurance": {
						"name": "",
						"plan_type": "",
						"member_number": "",
						"group_number": "",
						"bin": "",
						"pcn": ""
					}
				},
				"lap": {
					"first_name": "",
					"last_name": "",
					"address": {
						"address_1": "",
						"city": "",
						"state": "",
						"zip_code": "",
						"address_2": ""
					},
					"phone": ""
				},
				"enrolled_by": "patient",
				"phone_type": "Home",
				"email": "john.doe@example.com",
				"email_opt_in": "N",
				"member_id": "1145725528"
			},
			"provider_data": {
				"primary": [
					{
						"provider_id": "500011",
						"npi": "0000000006"
					}
				],
				"secondary": [
					{
						"provider_id": "",
						"npi": ""
					}
				]
			},
			"patient_lap": {
				"first_name": "",
				"last_name": "",
				"address": {
					"address_1": "",
					"city": "",
					"state": "",
					"zip_code": "",
					"address_2": ""
				},
				"phone": ""
			},
			"patient_provider_data": {
				"primary": [
					{
						"first_name": "John",
						"npi": "0000000006",
						"last_name": "Doe",
						"phones": {
							"phone": "1234567890"
						},
						"address": {
							"address1": "123 Main St",
							"address2": "",
							"city": "Newport",
							"state": "CA",
							"zip_code": "11111"
						}
					}
				],
				"secondary": [
					{
						"practice_name": "",
						"npi": "",
						"phones": {
							"phone": ""
						},
						"address": {
							"address1": "",
							"address2": "",
							"city": "",
							"state": "",
							"zip_code": ""
						}
					}
				]
			},
			"patient_commercial_insurance": {
				"medical_insurance": {
					"name": "BCBS",
					"plan_type": "HMO",
					"member_number": "123",
					"effective_date": "2023-01-01",
					"group_number": "12345",
					"bin": "",
					"pcn": ""
				},
				"rx_insurance": {
					"name": "",
					"plan_type": "",
					"member_number": "",
					"group_number": "",
					"bin": "",
					"pcn": ""
				}
			},
			"patient_benefits_amounts": {
				"current_period": {
					"total_amount_drug": 15000,
					"total_amount_drug_admin": 1500,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1500,
					"used_amount_drug": 0,
					"used_amount_drug_admin": 0,
					"use_count_drug": 0,
					"use_count_drug_admin": 0
				},
				"prior_period": {
					"total_amount_drug": 15000,
					"total_amount_drug_admin": 1500,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1500,
					"used_amount_drug": 0,
					"used_amount_drug_admin": 0,
					"use_count_drug": 0,
					"use_count_drug_admin": 0
				}
			},
			"card_data": {},
			"verification_data": {
				"request": {
					"PatientPersonalInfo": {
						"FirstName": "John",
						"LastName": "Doe",
						"DateOfBirth": "2002-11-14",
						"Gender": "Male",
						"City": "Newport",
						"State": "CA",
						"Zipcode": "11111",
						"Email": "john.doe@example.com",
						"PhoneNumber": "(123) 456-7890"
					},
					"PatientMedicalInsurance": {
						"name": "BCBS",
						"plan_type": "HMO",
						"member_number": "123",
						"effective_date": "2023-01-01",
						"group_number": "12345",
						"bin": "",
						"pcn": ""
					},
					"PatientPharmacyInsurance": {
						"payer_name": "",
						"payer_type": "",
						"plan_bin": "",
						"plan_pcn": "",
						"plan_group": "",
						"plan_id": "",
						"plan_start_date": "",
						"plan_end_date": ""
					},
					"CardRequestInfo": {
						"Type": "Xolair_WEB"
					}
				},
				"response": {
					"CardResponseInfo": {
						"MemberId": "1145725528",
						"Bin": "123456",
						"Pcn": "pcn",
						"Group": "group",
						"AllowableUses": "999",
						"BenefitAmount": "15000",
						"Status": "Inactive"
					},
					"TransactionInfo": {
						"TransactionId": "e2f07b01-02e0-4bf3-85a0-06d5c6bfeda8",
						"TransactionCreatedDateTime": "2023-11-17T18:08:05.941Z",
						"EnrollmentStatus": "Not Determined"
					}
				}
			},
			"credentials_id": "1145725528",
			"Enrollment End Date": "2024-12-31",
			"Enrollment Status Reason": ""
		},
		{
			"Member ID": "1145725529",
			"First Name": "Jane",
			"Last Name": "Smith",
			"Date of Birth": "1988-03-22",
			"Enrollment Status": "Active",
			"Prior Member ID": "1234567890",
			"Gender": "Female",
			"Drug Patient": "N",
			"Drug Indication": "NA",
			"Drug Admin Patient": "Y",
			"Drug Admin Indication": "Indication Admin",
			"Original Enrollment Date Drug": "2022-08-01",
			"Original Enrollment Date Drug Admin": "2022-08-01",
			"Current Enrollment Date Drug": "",
			"Current Enrollment Date Drug Admin": "2024-01-01",
			"Enrollment Source": "provider",
			"Address": "456 Elm St",
			"City": "Springfield",
			"State": "IL",
			"Zipcode": "62704",
			"Phone": "(217) 555-1234",
			"Email": "jane.smith@example.com",
			"Database ID": 2004643,
			"Card Pii": "",
			"Eligibility Data": {
				"drug": {
					"answer_01": "no",
					"answer_02": "no",
					"answer_03": "0",
					"answer_04": "no",
					"answer_05": "yes",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "disagree",
					"answer_18": "disagree"
				},
				"admin": {
					"answer_01": "yes",
					"answer_02": "yes",
					"answer_03": "2",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				}
			},
			"Medicare": "",
			"patient_enrollment": {
				"original_enrollment_date": "2022-08-01",
				"enrollment_date": "2022-08-01",
				"first_name": "Jane",
				"last_name": "Smith",
				"date_of_birth": "1988-03-22",
				"gender": "Female",
				"request_card": "n",
				"phone": "(217) 555-1234",
				"address": {
					"address_1": "456 Elm St",
					"city": "Springfield",
					"state": "IL",
					"zip_code": "62704",
					"address_2": ""
				},
				"commercial_insurance": {
					"medical_insurance": {
						"name": "Aetna",
						"plan_type": "PPO",
						"member_number": "456",
						"effective_date": "2022-08-01",
						"group_number": "67890",
						"bin": "",
						"pcn": ""
					},
					"rx_insurance": {
						"name": "CVS Caremark",
						"plan_type": "Rx",
						"member_number": "789",
						"group_number": "98765",
						"bin": "987654",
						"pcn": "pcn"
					}
				},
				"lap": {
					"first_name": "",
					"last_name": "",
					"address": {
						"address_1": "",
						"city": "",
						"state": "",
						"zip_code": "",
						"address_2": ""
					},
					"phone": ""
				},
				"enrolled_by": "provider",
				"phone_type": "Mobile",
				"email": "jane.smith@example.com",
				"email_opt_in": "Y",
				"member_id": "1145725529"
			},
			"provider_data": {
				"primary": [
					{
						"provider_id": "500012",
						"npi": "0000000007"
					}
				],
				"secondary": [
					{
						"provider_id": "500013",
						"npi": "0000000008"
					}
				]
			},
			"patient_lap": {
				"first_name": "",
				"last_name": "",
				"address": {
					"address_1": "",
					"city": "",
					"state": "",
					"zip_code": "",
					"address_2": ""
				},
				"phone": ""
			},
			"patient_provider_data": {
				"primary": [
					{
						"first_name": "James",
						"npi": "0000000007",
						"last_name": "Brown",
						"phones": {
							"phone": "2175551234"
						},
						"address": {
							"address1": "456 Elm St",
							"address2": "",
							"city": "Springfield",
							"state": "IL",
							"zip_code": "62704"
						}
					}
				],
				"secondary": [
					{
						"practice_name": "Clinic 2",
						"npi": "0000000008",
						"phones": {
							"phone": "2175554321"
						},
						"address": {
							"address1": "789 Oak St",
							"address2": "",
							"city": "Springfield",
							"state": "IL",
							"zip_code": "62701"
						}
					}
				]
			},
			"patient_commercial_insurance": {
				"medical_insurance": {
					"name": "Aetna",
					"plan_type": "PPO",
					"member_number": "456",
					"effective_date": "2022-08-01",
					"group_number": "67890",
					"bin": "",
					"pcn": ""
				},
				"rx_insurance": {
					"name": "CVS Caremark",
					"plan_type": "Rx",
					"member_number": "789",
					"group_number": "98765",
					"bin": "987654",
					"pcn": "pcn"
				}
			},
			"patient_benefits_amounts": {
				"current_period": {
					"total_amount_drug": 20000,
					"total_amount_drug_admin": 2500,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1000,
					"used_amount_drug": 5000,
					"used_amount_drug_admin": 1500,
					"use_count_drug": 3,
					"use_count_drug_admin": 2
				},
				"prior_period": {
					"total_amount_drug": 20000,
					"total_amount_drug_admin": 2500,
					"balance_amount_drug": 10000,
					"balance_amount_drug_admin": 500,
					"used_amount_drug": 10000,
					"used_amount_drug_admin": 2000,
					"use_count_drug": 6,
					"use_count_drug_admin": 4
				}
			},
			"card_data": {},
			"verification_data": {
				"request": {
					"PatientPersonalInfo": {
						"FirstName": "Jane",
						"LastName": "Smith",
						"DateOfBirth": "1988-03-22",
						"Gender": "Female",
						"City": "Springfield",
						"State": "IL",
						"Zipcode": "62704",
						"Email": "jane.smith@example.com",
						"PhoneNumber": "(217) 555-1234"
					},
					"PatientMedicalInsurance": {
						"name": "Aetna",
						"plan_type": "PPO",
						"member_number": "456",
						"effective_date": "2022-08-01",
						"group_number": "67890",
						"bin": "",
						"pcn": ""
					},
					"PatientPharmacyInsurance": {
						"payer_name": "CVS Caremark",
						"payer_type": "Rx",
						"plan_bin": "987654",
						"plan_pcn": "pcn",
						"plan_group": "98765",
						"plan_id": "789",
						"plan_start_date": "2022-08-01",
						"plan_end_date": ""
					},
					"CardRequestInfo": {
						"Type": "Xolair_WEB"
					}
				},
				"response": {
					"CardResponseInfo": {
						"MemberId": "1145725529",
						"Bin": "987654",
						"Pcn": "pcn",
						"Group": "group",
						"AllowableUses": "999",
						"BenefitAmount": "20000",
						"Status": "Active"
					},
					"TransactionInfo": {
						"TransactionId": "e3f07b01-02e0-4bf3-85a0-06d5c6bfeda8",
						"TransactionCreatedDateTime": "2023-11-17T18:08:05.941Z",
						"EnrollmentStatus": "Determined"
					}
				}
			},
			"credentials_id": "1145725529",
			"Enrollment End Date": "2025-12-31",
			"Enrollment Status Reason": "Eligibility Confirmed"
		},
		{
			"Member ID": "1145725530",
			"First Name": "Alice",
			"Last Name": "Johnson",
			"Date of Birth": "1990-05-15",
			"Enrollment Status": "Expired",
			"Prior Member ID": "",
			"Gender": "Female",
			"Drug Patient": "Y",
			"Drug Indication": "Indication Drug",
			"Drug Admin Patient": "Y",
			"Drug Admin Indication": "Indication Admin",
			"Original Enrollment Date Drug": "2021-03-10",
			"Original Enrollment Date Drug Admin": "2021-03-10",
			"Current Enrollment Date Drug": "2022-03-10",
			"Current Enrollment Date Drug Admin": "2022-03-10",
			"Enrollment Source": "self",
			"Address": "789 Pine St",
			"City": "Springfield",
			"State": "IL",
			"Zipcode": "62701",
			"Phone": "(217) 555-9876",
			"Email": "alice.johnson@example.com",
			"Database ID": 3005754,
			"Card Pii": "",
			"Eligibility Data": {
				"drug": {
					"answer_01": "yes",
					"answer_02": "no",
					"answer_03": "1",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "disagree",
					"answer_18": "disagree"
				},
				"admin": {
					"answer_01": "no",
					"answer_02": "yes",
					"answer_03": "0",
					"answer_04": "no",
					"answer_05": "yes",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				}
			},
			"Medicare": "",
			"patient_enrollment": {
				"original_enrollment_date": "2021-03-10",
				"enrollment_date": "2022-03-10",
				"first_name": "Alice",
				"last_name": "Johnson",
				"date_of_birth": "1990-05-15",
				"gender": "Female",
				"request_card": "n",
				"phone": "(217) 555-9876",
				"address": {
					"address_1": "789 Pine St",
					"city": "Springfield",
					"state": "IL",
					"zip_code": "62701",
					"address_2": ""
				},
				"commercial_insurance": {
					"medical_insurance": {
						"name": "UnitedHealthcare",
						"plan_type": "HMO",
						"member_number": "654",
						"effective_date": "2021-03-10",
						"group_number": "54321",
						"bin": "",
						"pcn": ""
					},
					"rx_insurance": {
						"name": "OptumRx",
						"plan_type": "Rx",
						"member_number": "321",
						"group_number": "13579",
						"bin": "135791",
						"pcn": "pcn"
					}
				},
				"lap": {
					"first_name": "",
					"last_name": "",
					"address": {
						"address_1": "",
						"city": "",
						"state": "",
						"zip_code": "",
						"address_2": ""
					},
					"phone": ""
				},
				"enrolled_by": "self",
				"phone_type": "Home",
				"email": "alice.johnson@example.com",
				"email_opt_in": "N",
				"member_id": "1145725530"
			},
			"provider_data": {
				"primary": [
					{
						"provider_id": "500014",
						"npi": "0000000009"
					}
				],
				"secondary": []
			},
			"patient_lap": {
				"first_name": "",
				"last_name": "",
				"address": {
					"address_1": "",
					"city": "",
					"state": "",
					"zip_code": "",
					"address_2": ""
				},
				"phone": ""
			},
			"patient_provider_data": {
				"primary": [
					{
						"first_name": "Linda",
						"npi": "0000000009",
						"last_name": "White",
						"phones": {
							"phone": "2175559876"
						},
						"address": {
							"address1": "789 Pine St",
							"address2": "",
							"city": "Springfield",
							"state": "IL",
							"zip_code": "62701"
						}
					}
				],
				"secondary": []
			},
			"patient_commercial_insurance": {
				"medical_insurance": {
					"name": "UnitedHealthcare",
					"plan_type": "HMO",
					"member_number": "654",
					"effective_date": "2021-03-10",
					"group_number": "54321",
					"bin": "",
					"pcn": ""
				},
				"rx_insurance": {
					"name": "OptumRx",
					"plan_type": "Rx",
					"member_number": "321",
					"group_number": "13579",
					"bin": "135791",
					"pcn": "pcn"
				}
			},
			"patient_benefits_amounts": {
				"current_period": {
					"total_amount_drug": 18000,
					"total_amount_drug_admin": 2000,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1500,
					"used_amount_drug": 3000,
					"used_amount_drug_admin": 500,
					"use_count_drug": 1,
					"use_count_drug_admin": 1
				},
				"prior_period": {
					"total_amount_drug": 18000,
					"total_amount_drug_admin": 2000,
					"balance_amount_drug": 9000,
					"balance_amount_drug_admin": 1000,
					"used_amount_drug": 9000,
					"used_amount_drug_admin": 1000,
					"use_count_drug": 3,
					"use_count_drug_admin": 2
				}
			},
			"card_data": {},
			"verification_data": {
				"request": {
					"PatientPersonalInfo": {
						"FirstName": "Alice",
						"LastName": "Johnson",
						"DateOfBirth": "1990-05-15",
						"Gender": "Female",
						"City": "Springfield",
						"State": "IL",
						"Zipcode": "62701",
						"Email": "alice.johnson@example.com",
						"PhoneNumber": "(217) 555-9876"
					},
					"PatientMedicalInsurance": {
						"name": "UnitedHealthcare",
						"plan_type": "HMO",
						"member_number": "654",
						"effective_date": "2021-03-10",
						"group_number": "54321",
						"bin": "",
						"pcn": ""
					},
					"PatientPharmacyInsurance": {
						"payer_name": "OptumRx",
						"payer_type": "Rx",
						"plan_bin": "135791",
						"plan_pcn": "pcn",
						"plan_group": "13579",
						"plan_id": "321",
						"plan_start_date": "2021-03-10",
						"plan_end_date": ""
					},
					"CardRequestInfo": {
						"Type": "Xolair_WEB"
					}
				},
				"response": {
					"CardResponseInfo": {
						"MemberId": "1145725530",
						"Bin": "135791",
						"Pcn": "pcn",
						"Group": "group",
						"AllowableUses": "999",
						"BenefitAmount": "18000",
						"Status": "Expired"
					},
					"TransactionInfo": {
						"TransactionId": "f4a07b01-02e0-4bf3-85a0-06d5c6bfeda8",
						"TransactionCreatedDateTime": "2023-12-17T18:08:05.941Z",
						"EnrollmentStatus": "Expired"
					}
				}
			},
			"credentials_id": "1145725530",
			"Enrollment End Date": "2023-12-31",
			"Enrollment Status Reason": "Eligibility Expired"
		},
		{
			"Member ID": "1145725528",
			"First Name": "John",
			"Last Name": "Doe",
			"Date of Birth": "2002-11-14",
			"Enrollment Status": "Pending",
			"Prior Member ID": "",
			"Gender": "Male",
			"Drug Patient": "Y",
			"Drug Indication": "Indication Drug",
			"Drug Admin Patient": "Y",
			"Drug Admin Indication": "Indication Admin",
			"Original Enrollment Date Drug": "2023-11-17",
			"Original Enrollment Date Drug Admin": "2023-11-17",
			"Current Enrollment Date Drug": "2024-01-01",
			"Current Enrollment Date Drug Admin": "2024-01-01",
			"Enrollment Source": "patient",
			"Address": "123 Main St",
			"City": "Newport",
			"State": "CA",
			"Zipcode": "11111",
			"Phone": "(123) 456-7890",
			"Email": "john.doe@example.com",
			"Database ID": 2004642,
			"Card Pii": "",
			"Eligibility Data": {
				"drug": {
					"answer_01": "yes",
					"answer_02": "yes",
					"answer_03": "1",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "CA",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				},
				"admin": {
					"answer_01": "yes",
					"answer_02": "yes",
					"answer_03": "1",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "CA",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				}
			},
			"Medicare": "",
			"patient_enrollment": {
				"original_enrollment_date": "2023-11-17",
				"enrollment_date": "2023-11-17",
				"first_name": "John",
				"last_name": "Doe",
				"date_of_birth": "2002-11-14",
				"gender": "Male",
				"request_card": "n",
				"phone": "(123) 456-7890",
				"address": {
					"address_1": "123 Main St",
					"city": "Newport",
					"state": "CA",
					"zip_code": "11111",
					"address_2": ""
				},
				"commercial_insurance": {
					"medical_insurance": {
						"name": "BCBS",
						"plan_type": "HMO",
						"member_number": "123",
						"effective_date": "2023-01-01",
						"group_number": "12345",
						"bin": "",
						"pcn": ""
					},
					"rx_insurance": {
						"name": "",
						"plan_type": "",
						"member_number": "",
						"group_number": "",
						"bin": "",
						"pcn": ""
					}
				},
				"lap": {
					"first_name": "",
					"last_name": "",
					"address": {
						"address_1": "",
						"city": "",
						"state": "",
						"zip_code": "",
						"address_2": ""
					},
					"phone": ""
				},
				"enrolled_by": "patient",
				"phone_type": "Home",
				"email": "john.doe@example.com",
				"email_opt_in": "N",
				"member_id": "1145725528"
			},
			"provider_data": {
				"primary": [
					{
						"provider_id": "500011",
						"npi": "0000000006"
					}
				],
				"secondary": [
					{
						"provider_id": "",
						"npi": ""
					}
				]
			},
			"patient_lap": {
				"first_name": "",
				"last_name": "",
				"address": {
					"address_1": "",
					"city": "",
					"state": "",
					"zip_code": "",
					"address_2": ""
				},
				"phone": ""
			},
			"patient_provider_data": {
				"primary": [
					{
						"first_name": "John",
						"npi": "0000000006",
						"last_name": "Doe",
						"phones": {
							"phone": "1234567890"
						},
						"address": {
							"address1": "123 Main St",
							"address2": "",
							"city": "Newport",
							"state": "CA",
							"zip_code": "11111"
						}
					}
				],
				"secondary": [
					{
						"practice_name": "",
						"npi": "",
						"phones": {
							"phone": ""
						},
						"address": {
							"address1": "",
							"address2": "",
							"city": "",
							"state": "",
							"zip_code": ""
						}
					}
				]
			},
			"patient_commercial_insurance": {
				"medical_insurance": {
					"name": "BCBS",
					"plan_type": "HMO",
					"member_number": "123",
					"effective_date": "2023-01-01",
					"group_number": "12345",
					"bin": "",
					"pcn": ""
				},
				"rx_insurance": {
					"name": "",
					"plan_type": "",
					"member_number": "",
					"group_number": "",
					"bin": "",
					"pcn": ""
				}
			},
			"patient_benefits_amounts": {
				"current_period": {
					"total_amount_drug": 15000,
					"total_amount_drug_admin": 1500,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1500,
					"used_amount_drug": 0,
					"used_amount_drug_admin": 0,
					"use_count_drug": 0,
					"use_count_drug_admin": 0
				},
				"prior_period": {
					"total_amount_drug": 15000,
					"total_amount_drug_admin": 1500,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1500,
					"used_amount_drug": 0,
					"used_amount_drug_admin": 0,
					"use_count_drug": 0,
					"use_count_drug_admin": 0
				}
			},
			"card_data": {},
			"verification_data": {
				"request": {
					"PatientPersonalInfo": {
						"FirstName": "John",
						"LastName": "Doe",
						"DateOfBirth": "2002-11-14",
						"Gender": "Male",
						"City": "Newport",
						"State": "CA",
						"Zipcode": "11111",
						"Email": "john.doe@example.com",
						"PhoneNumber": "(123) 456-7890"
					},
					"PatientMedicalInsurance": {
						"name": "BCBS",
						"plan_type": "HMO",
						"member_number": "123",
						"effective_date": "2023-01-01",
						"group_number": "12345",
						"bin": "",
						"pcn": ""
					},
					"PatientPharmacyInsurance": {
						"payer_name": "",
						"payer_type": "",
						"plan_bin": "",
						"plan_pcn": "",
						"plan_group": "",
						"plan_id": "",
						"plan_start_date": "",
						"plan_end_date": ""
					},
					"CardRequestInfo": {
						"Type": "Xolair_WEB"
					}
				},
				"response": {
					"CardResponseInfo": {
						"MemberId": "1145725528",
						"Bin": "123456",
						"Pcn": "pcn",
						"Group": "group",
						"AllowableUses": "999",
						"BenefitAmount": "15000",
						"Status": "Inactive"
					},
					"TransactionInfo": {
						"TransactionId": "e2f07b01-02e0-4bf3-85a0-06d5c6bfeda8",
						"TransactionCreatedDateTime": "2023-11-17T18:08:05.941Z",
						"EnrollmentStatus": "Not Determined"
					}
				}
			},
			"credentials_id": "1145725528",
			"Enrollment End Date": "2024-12-31",
			"Enrollment Status Reason": ""
		},
		{
			"Member ID": "1145725529",
			"First Name": "Jane",
			"Last Name": "Smith",
			"Date of Birth": "1988-03-22",
			"Enrollment Status": "Active",
			"Prior Member ID": "1234567890",
			"Gender": "Female",
			"Drug Patient": "N",
			"Drug Indication": "NA",
			"Drug Admin Patient": "Y",
			"Drug Admin Indication": "Indication Admin",
			"Original Enrollment Date Drug": "2022-08-01",
			"Original Enrollment Date Drug Admin": "2022-08-01",
			"Current Enrollment Date Drug": "",
			"Current Enrollment Date Drug Admin": "2024-01-01",
			"Enrollment Source": "provider",
			"Address": "456 Elm St",
			"City": "Springfield",
			"State": "IL",
			"Zipcode": "62704",
			"Phone": "(217) 555-1234",
			"Email": "jane.smith@example.com",
			"Database ID": 2004643,
			"Card Pii": "",
			"Eligibility Data": {
				"drug": {
					"answer_01": "no",
					"answer_02": "no",
					"answer_03": "0",
					"answer_04": "no",
					"answer_05": "yes",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "disagree",
					"answer_18": "disagree"
				},
				"admin": {
					"answer_01": "yes",
					"answer_02": "yes",
					"answer_03": "2",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				}
			},
			"Medicare": "",
			"patient_enrollment": {
				"original_enrollment_date": "2022-08-01",
				"enrollment_date": "2022-08-01",
				"first_name": "Jane",
				"last_name": "Smith",
				"date_of_birth": "1988-03-22",
				"gender": "Female",
				"request_card": "n",
				"phone": "(217) 555-1234",
				"address": {
					"address_1": "456 Elm St",
					"city": "Springfield",
					"state": "IL",
					"zip_code": "62704",
					"address_2": ""
				},
				"commercial_insurance": {
					"medical_insurance": {
						"name": "Aetna",
						"plan_type": "PPO",
						"member_number": "456",
						"effective_date": "2022-08-01",
						"group_number": "67890",
						"bin": "",
						"pcn": ""
					},
					"rx_insurance": {
						"name": "CVS Caremark",
						"plan_type": "Rx",
						"member_number": "789",
						"group_number": "98765",
						"bin": "987654",
						"pcn": "pcn"
					}
				},
				"lap": {
					"first_name": "",
					"last_name": "",
					"address": {
						"address_1": "",
						"city": "",
						"state": "",
						"zip_code": "",
						"address_2": ""
					},
					"phone": ""
				},
				"enrolled_by": "provider",
				"phone_type": "Mobile",
				"email": "jane.smith@example.com",
				"email_opt_in": "Y",
				"member_id": "1145725529"
			},
			"provider_data": {
				"primary": [
					{
						"provider_id": "500012",
						"npi": "0000000007"
					}
				],
				"secondary": [
					{
						"provider_id": "500013",
						"npi": "0000000008"
					}
				]
			},
			"patient_lap": {
				"first_name": "",
				"last_name": "",
				"address": {
					"address_1": "",
					"city": "",
					"state": "",
					"zip_code": "",
					"address_2": ""
				},
				"phone": ""
			},
			"patient_provider_data": {
				"primary": [
					{
						"first_name": "James",
						"npi": "0000000007",
						"last_name": "Brown",
						"phones": {
							"phone": "2175551234"
						},
						"address": {
							"address1": "456 Elm St",
							"address2": "",
							"city": "Springfield",
							"state": "IL",
							"zip_code": "62704"
						}
					}
				],
				"secondary": [
					{
						"practice_name": "Clinic 2",
						"npi": "0000000008",
						"phones": {
							"phone": "2175554321"
						},
						"address": {
							"address1": "789 Oak St",
							"address2": "",
							"city": "Springfield",
							"state": "IL",
							"zip_code": "62701"
						}
					}
				]
			},
			"patient_commercial_insurance": {
				"medical_insurance": {
					"name": "Aetna",
					"plan_type": "PPO",
					"member_number": "456",
					"effective_date": "2022-08-01",
					"group_number": "67890",
					"bin": "",
					"pcn": ""
				},
				"rx_insurance": {
					"name": "CVS Caremark",
					"plan_type": "Rx",
					"member_number": "789",
					"group_number": "98765",
					"bin": "987654",
					"pcn": "pcn"
				}
			},
			"patient_benefits_amounts": {
				"current_period": {
					"total_amount_drug": 20000,
					"total_amount_drug_admin": 2500,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1000,
					"used_amount_drug": 5000,
					"used_amount_drug_admin": 1500,
					"use_count_drug": 3,
					"use_count_drug_admin": 2
				},
				"prior_period": {
					"total_amount_drug": 20000,
					"total_amount_drug_admin": 2500,
					"balance_amount_drug": 10000,
					"balance_amount_drug_admin": 500,
					"used_amount_drug": 10000,
					"used_amount_drug_admin": 2000,
					"use_count_drug": 6,
					"use_count_drug_admin": 4
				}
			},
			"card_data": {},
			"verification_data": {
				"request": {
					"PatientPersonalInfo": {
						"FirstName": "Jane",
						"LastName": "Smith",
						"DateOfBirth": "1988-03-22",
						"Gender": "Female",
						"City": "Springfield",
						"State": "IL",
						"Zipcode": "62704",
						"Email": "jane.smith@example.com",
						"PhoneNumber": "(217) 555-1234"
					},
					"PatientMedicalInsurance": {
						"name": "Aetna",
						"plan_type": "PPO",
						"member_number": "456",
						"effective_date": "2022-08-01",
						"group_number": "67890",
						"bin": "",
						"pcn": ""
					},
					"PatientPharmacyInsurance": {
						"payer_name": "CVS Caremark",
						"payer_type": "Rx",
						"plan_bin": "987654",
						"plan_pcn": "pcn",
						"plan_group": "98765",
						"plan_id": "789",
						"plan_start_date": "2022-08-01",
						"plan_end_date": ""
					},
					"CardRequestInfo": {
						"Type": "Xolair_WEB"
					}
				},
				"response": {
					"CardResponseInfo": {
						"MemberId": "1145725529",
						"Bin": "987654",
						"Pcn": "pcn",
						"Group": "group",
						"AllowableUses": "999",
						"BenefitAmount": "20000",
						"Status": "Active"
					},
					"TransactionInfo": {
						"TransactionId": "e3f07b01-02e0-4bf3-85a0-06d5c6bfeda8",
						"TransactionCreatedDateTime": "2023-11-17T18:08:05.941Z",
						"EnrollmentStatus": "Determined"
					}
				}
			},
			"credentials_id": "1145725529",
			"Enrollment End Date": "2025-12-31",
			"Enrollment Status Reason": "Eligibility Confirmed"
		},
		{
			"Member ID": "1145725530",
			"First Name": "Alice",
			"Last Name": "Johnson",
			"Date of Birth": "1990-05-15",
			"Enrollment Status": "Expired",
			"Prior Member ID": "",
			"Gender": "Female",
			"Drug Patient": "Y",
			"Drug Indication": "Indication Drug",
			"Drug Admin Patient": "Y",
			"Drug Admin Indication": "Indication Admin",
			"Original Enrollment Date Drug": "2021-03-10",
			"Original Enrollment Date Drug Admin": "2021-03-10",
			"Current Enrollment Date Drug": "2022-03-10",
			"Current Enrollment Date Drug Admin": "2022-03-10",
			"Enrollment Source": "self",
			"Address": "789 Pine St",
			"City": "Springfield",
			"State": "IL",
			"Zipcode": "62701",
			"Phone": "(217) 555-9876",
			"Email": "alice.johnson@example.com",
			"Database ID": 3005754,
			"Card Pii": "",
			"Eligibility Data": {
				"drug": {
					"answer_01": "yes",
					"answer_02": "no",
					"answer_03": "1",
					"answer_04": "yes",
					"answer_05": "no",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "disagree",
					"answer_18": "disagree"
				},
				"admin": {
					"answer_01": "no",
					"answer_02": "yes",
					"answer_03": "0",
					"answer_04": "no",
					"answer_05": "yes",
					"answer_06": "IL",
					"answer_07": "no",
					"answer_08": "no",
					"answer_09": "agree",
					"answer_18": "agree"
				}
			},
			"Medicare": "",
			"patient_enrollment": {
				"original_enrollment_date": "2021-03-10",
				"enrollment_date": "2022-03-10",
				"first_name": "Alice",
				"last_name": "Johnson",
				"date_of_birth": "1990-05-15",
				"gender": "Female",
				"request_card": "n",
				"phone": "(217) 555-9876",
				"address": {
					"address_1": "789 Pine St",
					"city": "Springfield",
					"state": "IL",
					"zip_code": "62701",
					"address_2": ""
				},
				"commercial_insurance": {
					"medical_insurance": {
						"name": "UnitedHealthcare",
						"plan_type": "HMO",
						"member_number": "654",
						"effective_date": "2021-03-10",
						"group_number": "54321",
						"bin": "",
						"pcn": ""
					},
					"rx_insurance": {
						"name": "OptumRx",
						"plan_type": "Rx",
						"member_number": "321",
						"group_number": "13579",
						"bin": "135791",
						"pcn": "pcn"
					}
				},
				"lap": {
					"first_name": "",
					"last_name": "",
					"address": {
						"address_1": "",
						"city": "",
						"state": "",
						"zip_code": "",
						"address_2": ""
					},
					"phone": ""
				},
				"enrolled_by": "self",
				"phone_type": "Home",
				"email": "alice.johnson@example.com",
				"email_opt_in": "N",
				"member_id": "1145725530"
			},
			"provider_data": {
				"primary": [
					{
						"provider_id": "500014",
						"npi": "0000000009"
					}
				],
				"secondary": []
			},
			"patient_lap": {
				"first_name": "",
				"last_name": "",
				"address": {
					"address_1": "",
					"city": "",
					"state": "",
					"zip_code": "",
					"address_2": ""
				},
				"phone": ""
			},
			"patient_provider_data": {
				"primary": [
					{
						"first_name": "Linda",
						"npi": "0000000009",
						"last_name": "White",
						"phones": {
							"phone": "2175559876"
						},
						"address": {
							"address1": "789 Pine St",
							"address2": "",
							"city": "Springfield",
							"state": "IL",
							"zip_code": "62701"
						}
					}
				],
				"secondary": []
			},
			"patient_commercial_insurance": {
				"medical_insurance": {
					"name": "UnitedHealthcare",
					"plan_type": "HMO",
					"member_number": "654",
					"effective_date": "2021-03-10",
					"group_number": "54321",
					"bin": "",
					"pcn": ""
				},
				"rx_insurance": {
					"name": "OptumRx",
					"plan_type": "Rx",
					"member_number": "321",
					"group_number": "13579",
					"bin": "135791",
					"pcn": "pcn"
				}
			},
			"patient_benefits_amounts": {
				"current_period": {
					"total_amount_drug": 18000,
					"total_amount_drug_admin": 2000,
					"balance_amount_drug": 15000,
					"balance_amount_drug_admin": 1500,
					"used_amount_drug": 3000,
					"used_amount_drug_admin": 500,
					"use_count_drug": 1,
					"use_count_drug_admin": 1
				},
				"prior_period": {
					"total_amount_drug": 18000,
					"total_amount_drug_admin": 2000,
					"balance_amount_drug": 9000,
					"balance_amount_drug_admin": 1000,
					"used_amount_drug": 9000,
					"used_amount_drug_admin": 1000,
					"use_count_drug": 3,
					"use_count_drug_admin": 2
				}
			},
			"card_data": {},
			"verification_data": {
				"request": {
					"PatientPersonalInfo": {
						"FirstName": "Alice",
						"LastName": "Johnson",
						"DateOfBirth": "1990-05-15",
						"Gender": "Female",
						"City": "Springfield",
						"State": "IL",
						"Zipcode": "62701",
						"Email": "alice.johnson@example.com",
						"PhoneNumber": "(217) 555-9876"
					},
					"PatientMedicalInsurance": {
						"name": "UnitedHealthcare",
						"plan_type": "HMO",
						"member_number": "654",
						"effective_date": "2021-03-10",
						"group_number": "54321",
						"bin": "",
						"pcn": ""
					},
					"PatientPharmacyInsurance": {
						"payer_name": "OptumRx",
						"payer_type": "Rx",
						"plan_bin": "135791",
						"plan_pcn": "pcn",
						"plan_group": "13579",
						"plan_id": "321",
						"plan_start_date": "2021-03-10",
						"plan_end_date": ""
					},
					"CardRequestInfo": {
						"Type": "Xolair_WEB"
					}
				},
				"response": {
					"CardResponseInfo": {
						"MemberId": "1145725530",
						"Bin": "135791",
						"Pcn": "pcn",
						"Group": "group",
						"AllowableUses": "999",
						"BenefitAmount": "18000",
						"Status": "Expired"
					},
					"TransactionInfo": {
						"TransactionId": "f4a07b01-02e0-4bf3-85a0-06d5c6bfeda8",
						"TransactionCreatedDateTime": "2023-12-17T18:08:05.941Z",
						"EnrollmentStatus": "Expired"
					}
				}
			},
			"credentials_id": "1145725530",
			"Enrollment End Date": "2023-12-31",
			"Enrollment Status Reason": "Eligibility Expired"
		}
	],
	myfun1(){
		return this.lookupTableData
	},
	myfun2(){
		return this.myfun1()
	}

}