import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

ul {
  width: 300px;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 5px;
}

li {
  background-color: rgba(214, 214, 214, 0.5);
  border-radius: 5px;
  margin-bottom: 20px;
  overflow: hidden;
  cursor: pointer;

  &:last-child {
  margin-bottom: 0px;
}


}

.divLi {
    width:20px;
    display: flex;
 }


.avatar {
  width: 40px;
  height: 40px;
  background-color: #666;
  border-radius: 20px;
}

.row {
  width: 100%;
  height: 8px;
  background-color: #999;
  border-radius: 10px;
  margin-top: 12px;
}


`