export enum RabbitMQ {
  UserQueue = 'users',
  PassengerQueue = 'passengers',
}

export enum UserMSG {
  CREATE = 'CREATE_USER',
  FIND_ALL = 'FIND_USERS',
}

export enum PassengerMSG {
  CREATE = 'CREATE_PASSENER',
  FIND_ALL = 'FIND_PASSENGER',
}
