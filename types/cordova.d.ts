// src/types/cordova.d.ts

interface Navigator {
  camera: Camera
}

interface CameraOptions {
  quality?: number;
  destinationType?: number;
  sourceType?: number;
  allowEdit?: boolean;
  encodingType?: number;
  targetWidth?: number;
  targetHeight?: number;
  mediaType?: number;
  correctOrientation?: boolean;
  saveToPhotoAlbum?: boolean;
  cameraDirection?: number;
}

interface Camera {
  DestinationType: {
    DATA_URL: number;
    FILE_URI: number;
  };
  EncodingType: {
    JPEG: number;
    PNG: number;
  };
  MediaType: {
    PICTURE: number;
    VIDEO: number;
    ALLMEDIA: number;
  };
  PictureSourceType: {
    PHOTOLIBRARY: number;
    CAMERA: number;
    SAVEDPHOTOALBUM: number;
  };
  CameraDirection: {
    BACK: number;
    FRONT: number;
  };
  getPicture(
    successCallback: (imageData: string) => void,
    errorCallback: (message: string) => void,
    options?: CameraOptions
  ): void;

  cleanup(
    onSuccess: () => void,
    onError: (message: string) => void): void;
  
  hasCameraPermission(): void;
}
  
export declare var Camera: Camera;
  