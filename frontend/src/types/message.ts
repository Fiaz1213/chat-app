export type MessageT = {
  _id: string;
  message: string;
  senderId: string;
  receiverId: string;
  createdAt: string;
  shouldShake: boolean; //not coming from backend...added for effect
};
