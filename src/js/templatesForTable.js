import { store } from './store';

export const addTableToByte = obj => {
  store.byteCloudHtml += `
        <li class="table">
        <div class="table_top">
          <h3 class="table_title">${obj.region}</h3>
          <ul class="rating_list list">
            <li class="item">
            ${
              obj.stars < 5
                ? '<img src="https://i.ibb.co/dQkPVFw/star-empty.png" alt="star" width="15px" />'
                : '<img src="https://i.ibb.co/s1Cyz5P/star-filled.png" alt="star" width="15px" />'
            }
            </li>
            <li class="item">
            ${
              obj.stars < 4
                ? '<img src="https://i.ibb.co/dQkPVFw/star-empty.png" alt="star" width="15px" />'
                : '<img src="https://i.ibb.co/s1Cyz5P/star-filled.png" alt="star" width="15px" />'
            }
            </li>
            <li class="item">
            ${
              obj.stars < 3
                ? '<img src="https://i.ibb.co/dQkPVFw/star-empty.png" alt="star" width="15px" />'
                : '<img src="https://i.ibb.co/s1Cyz5P/star-filled.png" alt="star" width="15px" />'
            }
            </li>
            <li class="item">
            ${
              obj.stars < 2
                ? '<img src="https://i.ibb.co/dQkPVFw/star-empty.png" alt="star" width="15px" />'
                : '<img src="https://i.ibb.co/s1Cyz5P/star-filled.png" alt="star" width="15px" />'
            }
            </li>
            <li class="item">
            ${
              obj.stars < 1
                ? '<img src="https://i.ibb.co/dQkPVFw/star-empty.png" alt="star" width="15px" />'
                : '<img src="https://i.ibb.co/s1Cyz5P/star-filled.png" alt="star" width="15px" />'
            }
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
  store.objectStorageHtml += `
          <li class="table">
          <div class="table_top">
            <h3 class="table_title">${obj.region}</h3>
            <ul class="rating_list list">
            <li class="item">
            ${
              obj.stars < 5
                ? '<img src="https://i.ibb.co/dQkPVFw/star-empty.png" alt="star" width="15px" />'
                : '<img src="https://i.ibb.co/s1Cyz5P/star-filled.png" alt="star" width="15px" />'
            }
            </li>
            <li class="item">
            ${
              obj.stars < 4
                ? '<img src="https://i.ibb.co/dQkPVFw/star-empty.png" alt="star" width="15px" />'
                : '<img src="https://i.ibb.co/s1Cyz5P/star-filled.png" alt="star" width="15px" />'
            }
            </li>
            <li class="item">
            ${
              obj.stars < 3
                ? '<img src="https://i.ibb.co/dQkPVFw/star-empty.png" alt="star" width="15px" />'
                : '<img src="https://i.ibb.co/s1Cyz5P/star-filled.png" alt="star" width="15px" />'
            }
            </li>
            <li class="item">
            ${
              obj.stars < 2
                ? '<img src="https://i.ibb.co/dQkPVFw/star-empty.png" alt="star" width="15px" />'
                : '<img src="https://i.ibb.co/s1Cyz5P/star-filled.png" alt="star" width="15px" />'
            }
            </li>
            <li class="item">
            ${
              obj.stars < 1
                ? '<img src="https://i.ibb.co/dQkPVFw/star-empty.png" alt="star" width="15px" />'
                : '<img src="https://i.ibb.co/s1Cyz5P/star-filled.png" alt="star" width="15px" />'
            }
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
