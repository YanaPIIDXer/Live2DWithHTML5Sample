import axios from "axios";

const modelRootPath = "./assets/LiveroiD_A-Y01/";
const modelJson = modelRootPath + "LiveroiD_A-Y01.model3.json";

window.onload = () => {
  loadJson(modelJson);
}

/**
 * JSON読み込み
 * @param filePath ファイルパス
 */
const loadJson = async (filePath: string) => {
  try {
    const response = await axios.get(filePath);
    if (response.status !== 200) { throw response; }
    console.log(response.data);
  } catch (error: any) {
    alert(error.message ?? error);
    console.error(error);
    throw error;
  }
}
