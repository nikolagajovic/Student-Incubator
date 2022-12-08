CREATE TABLE public.Logger (
	id serial,
	iduser integer NOT NULL,
	ideditor integer NOT NULL,
	Description jsonb NOT NULL,
	UpdatedAt TIMESTAMP NOT NULL,
	CONSTRAINT Logger_pk PRIMARY KEY (id)
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.Users (
	id serial NOT NULL,
	idaccountinfo integer NOT NULL,
	Name varchar(50) NOT NULL,
	Surname varchar(50) NOT NULL,
	OIB int8 NOT NULL UNIQUE,
	DateOfBirth DATE NOT NULL,
	Gender integer NOT NULL,
	Picture varchar(100) NOT NULL,
	CreatedAt TIMESTAMP NOT NULL,
	UpdatedAt TIMESTAMP,
	CONSTRAINT Users_pk PRIMARY KEY (id)
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.ContactInfo (
	id serial NOT NULL,
	contacttype varchar NOT NULL,
	iduser integer NOT NULL,
	Info varchar NOT NULL UNIQUE,
	Createdat TIMESTAMP NOT NULL,
	UpdatedAt TIMESTAMP,
	DateExpired TIMESTAMP,
	CONSTRAINT ContactInfo_pk PRIMARY KEY (id)
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.AccountInfo (
	id serial NOT NULL,
	Username varchar(50) NOT NULL UNIQUE,
	Password varchar(50) NOT NULL,
	LastLogin TIMESTAMP NOT NULL,
	Active integer NOT NULL,
	OldPassword varchar(50) NOT NULL,
	CreatedAt TIMESTAMP NOT NULL,
	UpdatedAt TIMESTAMP,
	superadmin integer,
	CONSTRAINT AccountInfo_pk PRIMARY KEY (id)
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.Subscription (
	id serial NOT NULL,
	Fee DECIMAL NOT NULL,
	ValidUntil TIMESTAMP NOT NULL,
	Description TEXT NOT NULL,
	CreatedAt TIMESTAMP NOT NULL,
	UpdatedAt TIMESTAMP,
	CONSTRAINT Subscription_pk PRIMARY KEY (id)
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.PaymentInfo (
	id serial NOT NULL,
	idsubscription integer NOT NULL,
	paymenttype varchar(50) NOT NULL,
	status varchar(30) NOT NULL,
	CONSTRAINT PaymentInfo_pk PRIMARY KEY (id)
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.Organization (
	id serial NOT NULL,
	Name varchar(255) NOT NULL UNIQUE,
	OIB int8 NOT NULL UNIQUE,
	CreatedAt TIMESTAMP NOT NULL,
	UpdatedAt TIMESTAMP,
	CONSTRAINT Organization_pk PRIMARY KEY (id)
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.ProjectMembers (
	id serial NOT NULL,
	iduser integer NOT NULL,
	idprojectinfo integer NOT NULL,
	idprojectrole integer NOT NULL,
	Active integer NOT NULL,
	CreatedAt TIMESTAMP NOT NULL,
	UpdatedAt TIMESTAMP,
	CONSTRAINT ProjectMembers_pk PRIMARY KEY (id)
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.ProjectInfo (
	id serial NOT NULL,
	idorganization integer NOT NULL,
	Name varchar(50) NOT NULL,
	StartDate DATE NOT NULL,
	FinishDate DATE NOT NULL,
	Estimated integer NOT NULL,
	Description TEXT NOT NULL,
	Status varchar(50) NOT NULL,
	EnrolledPeople integer NOT NULL,
	CreatedAt TIMESTAMP NOT NULL,
	UpdatedAt TIMESTAMP,
	CONSTRAINT ProjectInfo_pk PRIMARY KEY (id)
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.ProjectRoles (
	id serial NOT NULL,
	Role varchar NOT NULL UNIQUE,
	CONSTRAINT ProjectRoles_pk PRIMARY KEY (id)
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.Postcode (
	id serial NOT NULL,
	Postcode varchar(50) NOT NULL,
	CONSTRAINT Postcode_pk PRIMARY KEY (id)
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.City (
	id serial NOT NULL,
	idcountry integer NOT NULL,
	idpostcode integer NOT NULL,
	Name varchar(100) NOT NULL,
	CONSTRAINT City_pk PRIMARY KEY (id)
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.Address (
	id serial NOT NULL,
	iduser integer NOT NULL,
	idcity integer NOT NULL,
	StreetName varchar(100) NOT NULL,
	StreetNumber varchar(100) NOT NULL,
	CreatedAt TIMESTAMP NOT NULL,
	UpdatedAt TIMESTAMP NOT NULL,
	CONSTRAINT Address_pk PRIMARY KEY (id)
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.Country (
	id serial NOT NULL,
	Name varchar(100) NOT NULL UNIQUE,
	CONSTRAINT Country_pk PRIMARY KEY (id)
) WITH (
  OIDS=FALSE
);



CREATE TABLE public.OrganizationMembers (
	id serial NOT NULL,
	idpaymentinfo integer NOT NULL,
	idorganization integer NOT NULL,
	iduser integer NOT NULL,
	access varchar(50) NOT NULL,
	CONSTRAINT OrganizationMembers_pk PRIMARY KEY (id)
) WITH (
  OIDS=FALSE
);



ALTER TABLE Logger ADD CONSTRAINT Logger_fk0 FOREIGN KEY (iduser) REFERENCES Users(id);
ALTER TABLE Logger ADD CONSTRAINT Logger_fk1 FOREIGN KEY (ideditor) REFERENCES Users(id);

ALTER TABLE Users ADD CONSTRAINT Users_fk0 FOREIGN KEY (idaccountinfo) REFERENCES AccountInfo(id);

ALTER TABLE ContactInfo ADD CONSTRAINT ContactInfo_fk0 FOREIGN KEY (contacttype) REFERENCES ();
ALTER TABLE ContactInfo ADD CONSTRAINT ContactInfo_fk1 FOREIGN KEY (iduser) REFERENCES Users(id);



ALTER TABLE PaymentInfo ADD CONSTRAINT PaymentInfo_fk0 FOREIGN KEY (idsubscription) REFERENCES Subscription(id);


ALTER TABLE ProjectMembers ADD CONSTRAINT ProjectMembers_fk0 FOREIGN KEY (iduser) REFERENCES Users(id);
ALTER TABLE ProjectMembers ADD CONSTRAINT ProjectMembers_fk1 FOREIGN KEY (idprojectinfo) REFERENCES ProjectInfo(id);
ALTER TABLE ProjectMembers ADD CONSTRAINT ProjectMembers_fk2 FOREIGN KEY (idprojectrole) REFERENCES ProjectRoles(id);

ALTER TABLE ProjectInfo ADD CONSTRAINT ProjectInfo_fk0 FOREIGN KEY (idorganization) REFERENCES Organization(id);



ALTER TABLE City ADD CONSTRAINT City_fk0 FOREIGN KEY (idcountry) REFERENCES Country(id);
ALTER TABLE City ADD CONSTRAINT City_fk1 FOREIGN KEY (idpostcode) REFERENCES Postcode(id);

ALTER TABLE Address ADD CONSTRAINT Address_fk0 FOREIGN KEY (iduser) REFERENCES Users(id);
ALTER TABLE Address ADD CONSTRAINT Address_fk1 FOREIGN KEY (idcity) REFERENCES City(id);


ALTER TABLE OrganizationMembers ADD CONSTRAINT OrganizationMembers_fk0 FOREIGN KEY (idpaymentinfo) REFERENCES PaymentInfo(id);
ALTER TABLE OrganizationMembers ADD CONSTRAINT OrganizationMembers_fk1 FOREIGN KEY (idorganization) REFERENCES Organization(id);
ALTER TABLE OrganizationMembers ADD CONSTRAINT OrganizationMembers_fk2 FOREIGN KEY (iduser) REFERENCES Users(id);















