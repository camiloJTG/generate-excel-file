export interface AccessToken {
   data: Data;
   code: number;
}

export interface Data {
   token: string;
}

// Selection process interfaces
export interface SelectionProcess {
   data: Data;
   code: number;
}

export interface Data {
   data: Process[];
   total: number;
}

export interface Process {
   id: string;
   type: string;
   attributes: Attributes;
   relationships: Relationships;
}

export interface Attributes {
   id: number;
   title?: string;
   description?: string;
   process_status: string;
   area_id: number;
   area_name: string;
   area_token: string;
   workflow_id: number;
   workflow_token: any;
   workflow_info: WorkflowInfo;
   activation_date: any;
   responsible_process: string;
   responsible_process_email?: string;
   date_assignment_responsible?: string;
   vacancies: any;
   criticality?: string;
   process_type: string;
   published_portals: any;
   job_type_description: any;
   workday: any;
   contract_period: string;
   salary: any;
   currency: any;
   country: any;
   region: any;
   city: any;
   commune: any;
   required_experience: any;
   educational_degree: any;
   studies: any;
   computer_skills: any;
   minimum_requirements?: string;
   requires_own_mobilization?: boolean;
   confidentiality?: boolean;
   total_steps: number;
   close_date: any;
   closing_reasons: string;
   closing_reason_comment: any;
   total_applicants: number;
   subdomain: string;
   vacancies_coverage: any;
   workflow_updated_info: WorkflowUpdatedInfo;
   applicants_count: ApplicantsCount;
   steps: Step[];
}

export interface WorkflowInfo {
   Estado?: string;
   Unidad?: string;
   Empresa?: string;
   vacantes?: string;
   'ID solicitud'?: number;
   'Id aprobador'?: string;
   'Estado global'?: string;
   'Id Solicitante'?: string;
   'Centro de costo'?: string;
   'Lugar de Trabajo'?: string;
   'Nombre aprobador'?: string;
   'Nombre solicitud'?: string;
   'Cargo solicitante'?: string;
   'Límite de tiempo'?: string;
   'Área solicitante'?: string;
   'Fecha de creación'?: string;
   'Nombre Solicitante'?: string;
   'Fecha de resolución'?: string;
   'Adjunte Cv de referido'?: string;
   '¿Cuenta con referidos?'?: string;
   'Carrera y/o Especialidad'?: string;
   'Asignación de Responsable'?: string;
   'Comentarios del solicitante.'?: string;
   'Tipo de practica profesional'?: string;
   'Describa las funciones del cargo a solicitar.'?: string;
   Zona?: string;
   Cargo?: string;
   aviso?: string;
   Jornada?: string;
   Vacantes?: string;
   'Reporta a:'?: string;
   Comentarios?: string;
   Confidencial?: string;
   mensajeetapa6?: string;
   'Banda Salarial'?: string;
   'Sucursal o Faena'?: string;
   'Tipo de contrato'?: string;
   'Cantidad de meses'?: string;
   'Cargo que ocupaba'?: string;
   'Nivel de estudios'?: string;
   'Descriptor de cargo'?: string;
   'Nombre del proyecto'?: string;
   'Años de experiencia'?: string;
   'Experiencia anterior'?: string;
   'Carrera o especialidad'?: string;
   'Comentarios adicionales'?: string;
   'Motivo de contratación'?: string;
   'Señalar jornada correcta'?: string;
   '¿Dentro del presupuesto?'?: string;
   'Herramientas Informáticas'?: string;
   'Nivel de Inglés requerido'?: string;
   'Requiere manejo de inglés'?: string;
   'Nombre de a quien reemplaza'?: string;
   'Tipo de servicio solicitado'?: string;
   'Propósito general del cargo'?: string;
   'Justifique el motivo de Aumento'?: string;
   '¿La jornada señalada es correcta?'?: string;
   '¿El cargo tendrá personas a cargo?'?: string;
   'Señalar tipo de licencia de conducir'?: string;
   '¿Apto para personas con discapacidad?'?: string;
   'Datos de colaborador/es a Internalizar.'?: string;
   'Selecciona responsable del proceso de selección'?: string;
   '¿El cargo requiere contar con licencia de conducir?'?: string;
   'Justifique por qué no es apto para personas con discapacidad'?: string;
   'Otro tipo de herramienta informatica (plataforma / Nivel requerido)'?: string;
   Título?: string;
   Requisitos?: string;
   responsable?: string;
   Descripción?: string;
   'Grado académico'?: string;
   Requerimiento?: string;
   '¿La información señalada es correcta?'?: string;
   '¿El rol solicitado corresponde a un cargo Técnico?'?: string;
   'En caso de tener alguna dificultad o que no se cuenten con los registros solicitados favor contactar a soporte@rankmi.com en copia a diego.valdes@global.komatsu para revisar su requerimiento.  '?: string;
   separación?: string;
   Participantes?: string;
   'Nombre proceso'?: string;
   'Correo Ejecutivo'?: string;
   'Responsable asignado'?: string;
   'Fecha realización Kickoff'?: string;
   'El rol solicitado corresponde a un cargo Técnico '?: string;
   'Datos de colaborador/es a reemplazar.'?: string;
   Salario?: string;
   División?: string;
   'Centro costo'?: string;
   'Sede trabajo'?: string;
   'Tipo contrato'?: string;
   'Jefe Inmediato'?: string;
   'Tiempo contrato'?: string;
   'Cargo solicitado'?: string;
   'Unidad de negocio'?: string;
   'Motivo de contrato'?: string;
   'Número de vacantes'?: string;
   'Recursos necesarios'?: string;
   'Correo jefe inmediato'?: string;
   'Señalar Sede trabajo'?: string;
   'Justifique su aprobación'?: string;
   'Observaciones adicionales'?: string;
   'Cargar descripción de cargo'?: string;
   'Justificación de la solicitud'?: string;
   '¿Posición reportada en el BP?'?: string;
   '¿Posición reportada en el OL?'?: string;
   'Número y nombre de posición en SSFF'?: string;
   '¿Está de acuerdo con la asignación salarial de Compensación y Nómina?'?: string;
   'Cargo a evaluar'?: string;
   'Lugar de trabajo'?: string;
   'Tipo de formulario'?: string;
   'Cantidad de evaluados/as'?: string;
   'Datos de colaborador/es a evaluar.'?: string;
   'Tipo de proceso asociado a la evaluación'?: string;
   'Zona de Servicio a las personas a la cual pertenece'?: string;
   'Cargo selección simple'?: string;
   'Cargos directos e indirectos'?: string;
   'Jefatura directa'?: string;
   Aviso2?: string;
   Pregunta1?: string;
   'Hora resolucion'?: string;
   'Text HTML'?: string;
   'Responsable proceso'?: string;
}

export interface WorkflowUpdatedInfo {
   'ID solicitud': number;
   'Nombre solicitud': string;
   'Id Solicitante': string;
   'Nombre Solicitante': string;
   'Cargo solicitante': string;
   'Área solicitante': string;
   'Fecha de creación': string;
   'Estado global': string;
   'Id aprobador': string;
   'Nombre aprobador': string;
   Estado: string;
   'Fecha de resolución': string;
   'Hora resolucion': string;
   'Límite de tiempo': string;
   'Centro de costo'?: string;
   Unidad?: string;
   '¿Cuenta con referidos?'?: string;
   'Describa las funciones del cargo a solicitar.'?: string;
   'Adjunte Cv de referido'?: string;
   'Comentarios del solicitante.'?: string;
   'Lugar de Trabajo'?: string;
   vacantes?: string;
   Empresa?: string;
   'Asignación de Responsable'?: string;
   'Tipo de practica profesional'?: string;
   'Carrera y/o Especialidad'?: string;
   'Años de experiencia'?: string;
   'Banda Salarial'?: string;
   'Cantidad de meses'?: string;
   'Cargo que ocupaba'?: string;
   'Carrera o especialidad'?: string;
   'Comentarios adicionales'?: string;
   Confidencial?: string;
   'Datos de colaborador/es a Internalizar.'?: string;
   'Descriptor de cargo'?: string;
   'Experiencia anterior'?: string;
   Jornada?: string;
   'Justifique el motivo de Aumento'?: string;
   'Justifique por qué no es apto para personas con discapacidad'?: string;
   'Motivo de contratación'?: string;
   'Nivel de Inglés requerido'?: string;
   'Nivel de estudios'?: string;
   'Requiere manejo de inglés'?: string;
   'Nombre de a quien reemplaza'?: string;
   'Otro tipo de herramienta informatica (plataforma / Nivel requerido)'?: string;
   'Nombre del proyecto'?: string;
   Comentarios?: string;
   'Propósito general del cargo'?: string;
   'Señalar tipo de licencia de conducir'?: string;
   'Sucursal o Faena'?: string;
   'Tipo de contrato'?: string;
   'Tipo de servicio solicitado'?: string;
   Vacantes?: string;
   Zona?: string;
   aviso?: string;
   'Reporta a:'?: string;
   'Señalar jornada correcta'?: string;
   mensajeetapa6?: string;
   'Herramientas Informáticas'?: string;
   'Selecciona responsable del proceso de selección'?: string;
   Cargo?: string;
   '¿Apto para personas con discapacidad?'?: string;
   '¿Dentro del presupuesto?'?: string;
   '¿El cargo requiere contar con licencia de conducir?'?: string;
   '¿El cargo tendrá personas a cargo?'?: string;
   '¿La jornada señalada es correcta?'?: string;
   Descripción?: string;
   'Grado académico'?: string;
   Requisitos?: string;
   responsable?: string;
   Título?: string;
   'Jefatura directa'?: string;
   '¿El rol solicitado corresponde a un cargo Técnico?'?: string;
   '¿La información señalada es correcta?'?: string;
   'En caso de tener alguna dificultad o que no se cuenten con los registros solicitados favor contactar a soporte@rankmi.com en copia a diego.valdes@global.komatsu para revisar su requerimiento.  '?: string;
   Requerimiento?: string;
   'Correo Ejecutivo'?: string;
   Pregunta1?: string;
   'Fecha realización Kickoff'?: string;
   Participantes?: string;
   ROL?: string;
   'El rol solicitado corresponde a un cargo Técnico '?: string;
   'Responsable asignado'?: string;
   separación?: string;
   'Nombre proceso'?: string;
   'Text HTML'?: string;
   'Datos de colaborador/es a reemplazar.'?: string;
   'Cargo solicitado'?: string;
   'Justifique su aprobación'?: string;
   'Número y nombre de posición en SSFF'?: string;
   Salario?: string;
   '¿Posición reportada en el OL?'?: string;
   'Número de vacantes'?: string;
   'Motivo de contrato'?: string;
   'Justificación de la solicitud'?: string;
   'Observaciones adicionales'?: string;
   'Recursos necesarios'?: string;
   'Unidad de negocio'?: string;
   División?: string;
   'Centro costo'?: string;
   'Cargar descripción de cargo'?: string;
   'Jefe Inmediato'?: string;
   'Tiempo contrato'?: string;
   'Sede trabajo'?: string;
   'Tipo contrato'?: string;
   '¿Posición reportada en el BP?'?: string;
   '¿Está de acuerdo con la asignación salarial de Compensación y Nómina?'?: string;
   'Correo jefe inmediato'?: string;
   'Señalar Sede trabajo'?: string;
   'Título nueva pregunta'?: string;
   'Cantidad de evaluados/as'?: string;
   'Zona de Servicio a las personas a la cual pertenece'?: string;
   'Lugar de trabajo'?: string;
   'Datos de colaborador/es a evaluar.'?: string;
   'Tipo de proceso asociado a la evaluación'?: string;
   'Cargo a evaluar'?: string;
   'Tipo de formulario'?: string;
   Aviso2?: string;
   peliculas?: string;
   'Prueba 1'?: string;
   'Responsable proceso'?: string;
}

export interface ApplicantsCount {
   total: number;
   Contratado?: Contratado;
   'Carta de oferta aceptada listo para onboarding'?: CartaDeOfertaAceptadaListoParaOnboarding;
   'Carta de oferta enviada/esperando respuesta'?: CartaDeOfertaEnviadaEsperandoRespuesta;
   'Creación carta de oferta'?: CreacinCartaDeOferta;
   Finalista?: Finalista;
   'Exámenes Médicos'?: ExmenesMdicos;
   'Entrevista Panel Técnico'?: EntrevistaPanelTcnico;
   'Evaluación - Short List'?: EvaluacinShortList;
   'Seleccionados - long list'?: SeleccionadosLongList;
   Nuevos?: Nuevos;
   Evaluaciones?: Evaluaciones;
   Contratación?: Contratacin;
   'Solicitud de documentos / Carta oferta'?: SolicitudDeDocumentosCartaOferta;
   'Exámenes de ingreso / Estudios de seguridad / Pruebas psicotécnicas'?: ExmenesDeIngresoEstudiosDeSeguridadPruebasPsicotcnicas;
   'Entrevista jefe inmediato'?: EntrevistaJefeInmediato;
   'Entrevista de RRHH'?: EntrevistaDeRrhh;
   'Revisión de  hojas de vida'?: RevisinDeHojasDeVida;
   Postulados?: Postulados;
   'Revisión de Desarrollo'?: RevisinDeDesarrollo;
}

export interface Contratado {
   inProcess: number;
   disqualified: number;
}

export interface CartaDeOfertaAceptadaListoParaOnboarding {
   inProcess: number;
   disqualified: number;
}

export interface CartaDeOfertaEnviadaEsperandoRespuesta {
   inProcess: number;
   disqualified: number;
}

export interface CreacinCartaDeOferta {
   inProcess: number;
   disqualified: number;
}

export interface Finalista {
   inProcess: number;
   disqualified: number;
}

export interface ExmenesMdicos {
   inProcess: number;
   disqualified: number;
}

export interface EntrevistaPanelTcnico {
   inProcess: number;
   disqualified: number;
}

export interface EvaluacinShortList {
   inProcess: number;
   disqualified: number;
}

export interface SeleccionadosLongList {
   inProcess: number;
   disqualified: number;
}

export interface Nuevos {
   inProcess: number;
   disqualified: number;
}

export interface Evaluaciones {
   inProcess: number;
   disqualified: number;
}

export interface Contratacin {
   inProcess: number;
   disqualified: number;
}

export interface SolicitudDeDocumentosCartaOferta {
   inProcess: number;
   disqualified: number;
}

export interface ExmenesDeIngresoEstudiosDeSeguridadPruebasPsicotcnicas {
   inProcess: number;
   disqualified: number;
}

export interface EntrevistaJefeInmediato {
   inProcess: number;
   disqualified: number;
}

export interface EntrevistaDeRrhh {
   inProcess: number;
   disqualified: number;
}

export interface RevisinDeHojasDeVida {
   inProcess: number;
   disqualified: number;
}

export interface Postulados {
   inProcess: number;
   disqualified: number;
}

export interface RevisinDeDesarrollo {
   inProcess: number;
   disqualified: number;
}

export interface Step {
   id: number;
   name: string;
   responsible_name: string[];
   applicants: Applicant[];
}

export interface Applicant {
   id: number;
   first_name: string;
   last_name: string;
   email: string;
   list_id: number;
   order?: number;
   created_at: string;
   updated_at: string;
   curriculum: Curriculum;
   birthdate: string;
   rut: string;
   phone: string;
   linkedin_url: any;
   trabajando_com_url: any;
   gender: number;
   has_driver_license: boolean;
   has_car: boolean;
   employment_situation_id: any;
   disqualified_datetime: any;
   educational_degree_id: any;
   job_disponibility_id: any;
   cvpub_trabajando_id: string;
   avatar: Avatar;
   list_update: string;
   computrabajo_url: any;
   cvpub_computrabajo_id: any;
   is_viewed: boolean;
   applicant_source_id: number;
   cvpub_laborum_id: any;
   is_hunted: boolean;
   uid: string;
   income_expectation: number;
   internal_information: any;
   experience_years_in_job: number;
   applicant_discard_reason_id: any;
   answer_mandatory_questions: boolean;
   middle_name: string;
   maiden_name: string;
   address: string;
   nationality: string;
   question: any;
   answer: any;
   studies_level: string;
   current_situation_name: string;
   experience_description: string;
   employment_status: number;
   experience_years: number;
   active: number;
   own_transportation: number;
   work_abroad: number;
   country_id: number;
   studies_level_id: number;
   emails: Emails;
   region_id: number;
   city_id: any;
   commune_id: number;
   computer_skill_id: number;
   marital_status: MaritalStatus;
   show_birth_date: number;
   show_civil_status: number;
   locked: number;
   country_name: string;
   region_name: string;
   city_name: any;
   commune_name: string;
   driver_licences_type: DriverLicencesType;
   address_complement: any;
   type_doc: TypeDoc;
   origin_country_doc: any;
   residence_country: any;
   id_facebook: number;
   id_twitter: number;
   id_linkedin: number;
   id_web_blog: number;
   facebook_link: any;
   twitter_link: any;
   linkedin_link: string;
   web_blog_link: any;
   phone_numbers: PhoneNumber[];
   summary_skill: any[][];
   last_work_experiencies: string;
   last_educations: string;
   applicant_source_name: string;
   is_hunting: boolean;
   applicant_discard_reason_name: any;
   rating: any;
   indeed_url: any;
   uniq_applicant_id: number;
   score: any;
   publication_date: string;
   board_update_time?: string;
   second_last_name: any;
   age: any;
   gender_description: any;
   ethnicity: any;
   workflow_id: any;
   consultant_id: any;
   reqlut_id: any;
   kudert_evaluation_id: any;
   has_disability: any;
   disqualify_reason_comment: any;
   original_applicant: any;
   curriculum_text: any;
}

export interface Curriculum {
   url: any;
}

export interface Avatar {
   url: string;
   thumb: Thumb;
}

export interface Thumb {
   url: string;
}

export interface Emails {
   primaryEmail: string;
   secondaryEmail: any;
}

export interface MaritalStatus {
   id: number;
   name: string;
}

export interface DriverLicencesType {
   personId: number;
   dataDriverLicence: any[];
}

export interface TypeDoc {
   id: number;
   description: string;
}

export interface PhoneNumber {
   place: string;
   code: string;
   number: string;
}

export interface Relationships {}
