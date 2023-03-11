export let byteCloudHtml = `<li><h2 class="list_title">ByteCloud</h2></li>`;
export let objectStorageHtml = `<li><h2 class="list_title">Object Storage</h2></li>`;

export const addTableToByte = obj => {
  byteCloudHtml += `
        <li class="table">
        <div class="table_top">
          <h3 class="table_title">${obj.region}</h3>
          <ul class="rating_list list">
            <li>
            <img src="../images/star${
              obj.stars < 5 ? '_empty' : '_filled'
            }.png" alt="star" width="15px" />
            </li>
            <li>
            <img src="../images/star${
              obj.stars < 4 ? '_empty' : '_filled'
            }.png" alt="star" width="15px" />
            </li>
            <li>
            <img src="../images/star${
              obj.stars < 3 ? '_empty' : '_filled'
            }.png" alt="star" width="15px" />
            </li>
            <li>
            <img src="../images/star${
              obj.stars < 2 ? '_empty' : '_filled'
            }.png" alt="star" width="15px" />
            </li>
            <li>
            <img src="../images/star${
              obj.stars < 1 ? '_empty' : '_filled'
            }.png" alt="star" width="15px" />
            </li>
          </ul>
        </div>
        <div class="table_bottom">
          <div class="table_txt">
            <p>Latency</p>
            <p>${obj.latency}</p>
          </div>
          <div class="table_txt">
            <p>Download Time</p>
            <p>${obj.time} sec</p>
          </div>
          <div class="table_txt">
            <p>Video streaming</p>
            <p>${obj.streaming}</p>
          </div>
        </div>
      </li>
        `;
};

export const addTableToObject = obj => {
  objectStorageHtml += `
          <li class="table">
          <div class="table_top">
            <h3 class="table_title">${obj.region}</h3>
            <ul class="rating_list list">
            <li>
            <img src="../images/star${
              obj.stars < 5 ? '_empty' : '_filled'
            }.png" alt="star" width="15px" />
            </li>
            <li>
            <img src="../images/star${
              obj.stars < 4 ? '_empty' : '_filled'
            }.png" alt="star" width="15px" />
            </li>
            <li>
            <img src="../images/star${
              obj.stars < 3 ? '_empty' : '_filled'
            }.png" alt="star" width="15px" />
            </li>
            <li>
            <img src="../images/star${
              obj.stars < 2 ? '_empty' : '_filled'
            }.png" alt="star" width="15px" />
            </li>
            <li>
            <img src="../images/star${
              obj.stars < 1 ? '_empty' : '_filled'
            }.png" alt="star" width="15px" />
            </li>
          </ul>
          </div>
          <div class="table_bottom">
            <div class="table_txt">
              <p>Latency</p>
              <p>${obj.latency}</p>
            </div>
            <div class="table_txt">
              <p>Download Time</p>
              <p>${obj.time} sec</p>
            </div>
            <div class="table_txt">
              <p>Video streaming</p>
              <p>${obj.streaming}</p>
            </div>
          </div>
        </li>
          `;
};
