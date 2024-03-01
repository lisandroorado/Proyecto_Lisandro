import { IsDateString, IsDefined, IsString, IsUUID, Length } from "class-validator";

export class card {
 
  @IsDefined()
  @Length(5, 30)
  title: string;

  @IsDefined()
  @IsString()
  @Length(40, 200)
  description : string;

  
  @IsDefined()
  @IsDateString()
  due_date : Date;

  @IsDefined()
  @IsUUID()
  listId : string;

  @IsDefined()
  @IsUUID()
  isOwnerId : string;

}
