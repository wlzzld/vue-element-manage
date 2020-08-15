// 文件处理

// 文件大小
const FileSizes = {
  K: 1024,
  M: 1048576,
  G: 1073741824,
  T: 1099511627776
};



// 计算文件大小
export function calcFileSize(fileByte) {
  const KB = FileSizes.K;
  const MB = FileSizes.M;
  const GB = FileSizes.G;
  const TB = FileSizes.T;
  const FIXED_TWO_POINT = 2;
  let fileSizeMsg = "";
  if (fileByte < KB) {
    fileSizeMsg = "小于1K";
  } else if (fileByte > KB && fileByte < MB) {
    fileSizeMsg = (fileByte / KB).toFixed(FIXED_TWO_POINT) + "K";
  } else if (fileByte === MB) {
    fileSizeMsg = "1M";
  } else if (fileByte > MB && fileByte < GB) {
    fileSizeMsg = (fileByte / (KB * KB)).toFixed(FIXED_TWO_POINT) + "M";
  } else if (fileByte > MB && fileByte === GB) {
    fileSizeMsg = "1G";
  } else if (fileByte > GB && fileByte < TB) {
    fileSizeMsg = (fileByte / (KB * KB * KB)).toFixed(FIXED_TWO_POINT) + "G";
  } else {
    fileSizeMsg = "超过1T";
  }
  return fileSizeMsg;
}


// 获取文件后缀
export function getFileSuffix(fileName) {
  const pointIndex = fileName.lastIndexOf(".");
  let suffix;
  if (pointIndex > -1) {
    suffix = fileName.slice(pointIndex + 1);
  } else {
    suffix = "file";
  }
  return suffix;
};


// 根据二进制数据流下载文件，
// 必须手动指定http请求的responseType为‘blob’或‘'arraybuffer'’
export function downloadByBlob(binaryString, resHeader) {
  // 从响应头的content-disposition中获取文件名称
  const contentDisposition = resHeader["content-disposition"];
  const patt = new RegExp("filename=([^;]+\\.[^\\.;]+);*");
  const result = patt.exec(contentDisposition);
  let fileName = "";
  if (result) {
    const reg = /^["](.*)["]$/g;
    fileName = decodeURI(result[1].replace(reg, "$1"));
  }

  const blob = new Blob([binaryString], { type: "application/octet-stream" });
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = fileName;
  link.click();
  // 延时释放
  setTimeout(() => {
    window.URL.revokeObjectURL(link.href);
  }, 100);
}
