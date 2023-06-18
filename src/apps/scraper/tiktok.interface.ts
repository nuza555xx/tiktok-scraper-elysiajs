// export interface DuetInfo {
//   duetFromId: string;
// }

// export interface ItemInfos {
//   id: string;
//   text: string;
//   createTime: number;
//   authorId: string;
//   musicId: string;
//   covers: string[];
//   coversOrigin: string[];
//   coversDynamic: string[];
//   video: {
//     urls: string[];
//     videoMeta: {
//       width: number;
//       height: number;
//       ratio: number;
//       duration: number;
//     };
//   };
//   diggCount: number;
//   shareCount: number;
//   playCount: number;
//   commentCount: number;
//   isOriginal: boolean;
//   isOfficial: boolean;
//   isActivityItem: boolean;
//   warnInfo: any[];
// }

// export interface AuthorInfos {
//   secUid: string;
//   userId: string;
//   uniqueId: string;
//   nickName: string;
//   signature: string;
//   verified: boolean;
//   covers: string[];
//   coversMedium: string[];
//   coversLarger: string[];
//   isSecret: boolean;
// }

// export interface MusicInfos {
//   musicId: string;
//   musicName: string;
//   authorName: string;
//   original: boolean;
//   playUrl: string[];
//   covers: string[];
//   coversMedium: string[];
//   coversLarger: string[];
//   posts: number;
// }

// export interface Challenge {
//   challengeId: string;
//   challengeName: string;
//   isCommerce: boolean;
//   text: string;
//   covers: string[];
//   coversMedium: string[];
//   coversLarger: string[];
//   posts: number;
//   views: string;
//   splitTitle: string;
// }

// export interface AuthorStats {
//   followingCount: number;
//   followerCount: number;
//   heartCount: number;
//   videoCount: number;
//   diggCount: number;
// }

// export interface Item {
//   itemInfos: ItemInfos;
//   authorInfos: AuthorInfos;
//   musicInfos: MusicInfos;
//   challengeInfoList: Challenge[];
//   authorStats: AuthorStats;
// }

// export interface RequestQuery {
//   id?: string;
//   musicID?: string;
//   secUid?: string;
//   shareUid?: string;
//   type?: number;
//   sourceType?: number;
//   count?: number;
//   priority_region?: string;
//   lang?: string;
//   referer?: string;
//   root_referer?: string;
//   minCursor?: number;
//   maxCursor?: number;
//   language?: string;
//   verifyFp?: string;
//   device_id?: string;
//   region?: string;
//   'X-Bogus'?: string;
//   msToken?: string;
//   challengeID?: string;
//   insertedItemID?: string;
//   noUser?: number;
//   fromPage?: string;
//   from_page?: string;
//   cursor?: number;
//   aid?: number;
//   itemID?: number;
//   appId?: number;
//   app_language?: string;
//   is_page_visible?: boolean;
//   user_agent?: string;
//   screen_width?: number;
//   screen_height?: number;
//   browser_language?: string;
//   browser_platform?: string;
//   isIOS?: boolean;
//   os?: string;
//   isMobile?: boolean;
//   isAndroid?: boolean;
//   cookie_enabled?: boolean;
//   history_len?: number;
//   focus_state?: boolean;
//   is_fullscreen?: boolean;
//   appType?: string;
//   browser_online?: boolean;
//   browser_version?: string;
//   browser_name?: string;
//   validUniqueId?: string;
//   uniqueId?: string;
//   isUniqueId?: boolean;
//   OS?: string;
//   app_name?: string;
//   device_platform?: string;
//   _signature?: string;
// }

// export interface VideoProps {
//   props: {
//     pageProps: {
//       videoData: Item;
//     };
//   };
// }

// /**
//  * New API
//  */
// export interface ItemListData {
//   statusCode: number;
//   items: FeedItems[];
//   itemList: FeedItems[];
//   hasMore: boolean;
//   maxCursor: string;
//   minCursor: string;
//   cursor: string;
// }

// export interface VideoMetadata {
//   statusCode: number;
//   itemInfo: { itemStruct: FeedItems };
// }

// export interface FeedItems {
//   id: string;
//   desc: string;
//   createTime: number;
//   video: {
//     id: string;
//     height: number;
//     width: number;
//     duration: number;
//     ratio: string;
//     cover: string;
//     originCover: string;
//     dynamicCover: string;
//     playAddr: string;
//     downloadAddr: string;
//     shareCover: string[];
//   };
//   author: {
//     id: string;
//     uniqueId: string;
//     nickname: string;
//     avatarThumb: string;
//     avatarMedium: string;
//     avatarLarger: string;
//     signature: string;
//     verified: boolean;
//     secUid: string;
//     relation: number;
//     openFavorite: boolean;
//     secret: boolean;
//   };
//   music: {
//     id: string;
//     title: string;
//     playUrl: string;
//     coverThumb: string;
//     coverMedium: string;
//     coverLarge: string;
//     authorName: string;
//     original: boolean;
//     duration: number;
//     album: string;
//   };
//   challenges: {
//     id: string;
//     title: string;
//     desc: string;
//     profileThumb: string;
//     profileMedium: string;
//     profileLarger: string;
//     coverThumb: string;
//     coverMedium: string;
//     coverLarger: string;
//   }[];
//   stats: {
//     diggCount: number;
//     shareCount: number;
//     commentCount: number;
//     playCount: number;
//   };
//   originalItem: boolean;
//   officalItem: boolean;
//   textExtra: {
//     awemeId: string;
//     start: number;
//     end: number;
//     hashtagName: string;
//     hashtagId: string;
//     type: number;
//     userId: string;
//     isCommerce: boolean;
//   }[];
//   secret: boolean;
//   forFriend: boolean;
//   digged: boolean;
//   itemCommentStatus: number;
//   showNotPass: boolean;
//   vl1: boolean;
//   authorStats: {
//     followingCount: number;
//     followerCount: number;
//     heartCount: number;
//     videoCount: number;
//     diggCount: number;
//   };
//   duetEnabled: boolean;
//   stitchEnabled: boolean;
//   duetInfo: DuetInfo;
//   effectStickers: {
//     name: string;
//     ID: string;
//   }[];
// }

// /**
//  * __
//  */
// export interface TikTokMetadata {
//   statusCode: number;
//   userInfo: UserMetadata;
//   challengeInfo: HashtagMetadata;
//   musicInfo: MusicMetadata;
// }

// export interface MusicMetadata {
//   music: {
//     id: string;
//     title: string;
//     playUrl: string;
//     coverThumb: string;
//     coverMedium: string;
//     coverLarge: string;
//     authorName: string;
//     original: boolean;
//     playToken: string;
//     keyToken: string;
//     audioURLWithCookie: boolean;
//     private: boolean;
//     duration: number;
//     album: string;
//   };
//   author: {
//     id: string;
//     uniqueId: string;
//     nickname: string;
//     avatarThumb: string;
//     avatarMedium: string;
//     avatarLarger: string;
//     signature: string;
//     verified: boolean;
//     secUid: string;
//     secret: boolean;
//     ftc: boolean;
//     relation: number;
//     openFavorite: boolean;
//     commentSetting: number;
//     duetSetting: number;
//     stitchSetting: number;
//     privateAccount: boolean;
//   };
//   stats: {
//     videoCount: number;
//   };
//   shareMeta: {
//     title: string;
//     desc: string;
//   };
// }

// export interface UserMetadata {
//   user: {
//     id: string;
//     uniqueId: string;
//     nickname: string;
//     avatarThumb: string;
//     avatarMedium: string;
//     avatarLarger: string;
//     signature: string;
//     verified: boolean;
//     secUid: string;
//     secret: boolean;
//     ftc: boolean;
//     relation: number;
//     openFavorite: boolean;
//     commentSetting: number;
//     duetSetting: number;
//     stitchSetting: number;
//     privateAccount: boolean;
//   };
//   stats: {
//     followingCount: number;
//     followerCount: number;
//     heartCount: number;
//     videoCount: number;
//     diggCount: number;
//     heart: number;
//   };
//   shareMeta: {
//     title: string;
//     desc: string;
//   };
// }

// export interface HashtagMetadata {
//   challenge: {
//     id: string;
//     title: string;
//     desc: string;
//     profileThumb: string;
//     profileMedium: string;
//     profileLarger: string;
//     coverThumb: string;
//     coverMedium: string;
//     coverLarger: string;
//     isCommerce: boolean;
//   };
//   stats: { videoCount: number; viewCount: number };
// }

// export interface WebHtmlUserMetadata {
//   props: {
//     pageProps: {
//       userInfo: UserMetadata;
//     };
//   };
// }


export interface FeedResponse {
  statusCode: number,
  minCursor: number,
  maxCursor: number,
  hasMore: number,
  awemeList: AwemeList[],
  homeModel: number,
  refreshClear: number,
  extra: {
    now: number,
    fatalItemIds: null
  },
  logPb: {
    imprId: string
  },
  preloadAds: [],
  preloadAwemes: null
}

export interface AwemeList {
  awemeId: string;
  desc: string;
  createTime: number;
  author: Author;
  music: Music;
  chaList: ChaList[];
  video: Video;
  shareUrl: string;
  userDigged: number;
  statistics: Statistics;
  status: Status;
  rate: number;
  textExtra: TextExtra[];
  isTop: number;
  labelTop: AvatarLarger;
  shareInfo: ShareInfo3;
  distance: string;
  videoLabels: any[];
  isVr: boolean;
  isAds: boolean;
  duration: number;
  awemeType: number;
  cmtSwt: boolean;
  imageInfos?: any;
  riskInfos: RiskInfos;
  isRelieve: boolean;
  sortLabel: string;
  position?: any;
  uniqidPosition?: any;
  authorUserId: number;
  bodydanceScore: number;
  geofencing: any[];
  isHashTag: number;
  isPgcshow: boolean;
  region: string;
  videoText: any[];
  collectStat: number;
  labelTopText?: any;
  groupId: string;
  preventDownload: boolean;
  nicknamePosition?: any;
  challengePosition?: any;
  itemCommentSettings: number;
  withPromotionalMusic: boolean;
  longVideo?: any;
  itemDuet: number;
  itemReact: number;
  descLanguage: string;
  interactionStickers?: any;
  miscInfo: string;
  originCommentIds?: any;
  commerceConfigData?: any;
  distributeType: number;
  videoControl: VideoControl;
  anchors?: any;
  hybridLabel?: any;
  withSurvey: boolean;
  geofencingRegions?: any;
  coverLabels?: any;
  maskInfos: any[];
  searchHighlight?: any;
  playlistBlocked: boolean;
  greenScreenMaterials?: any;
  interactPermission: InteractPermission;
  questionList?: any;
  contentDesc: string;
  contentDescExtra: any[];
  productsInfo?: any;
  followUpPublishFromId: number;
  disableSearchTrendingBar: boolean;
  musicBeginTimeInMs: number;
  musicEndTimeInMs: number;
  itemDistributeSource: string;
  itemSourceCategory: number;
  brandedContentAccounts?: any;
  isDescriptionTranslatable: boolean;
  followUpItemIdGroups: string;
  isTextStickerTranslatable: boolean;
  textStickerMajorLang: string;
  originalClientText: OriginalClientText;
  musicSelectedFrom: string;
  ttsVoiceIds?: any;
  referenceTtsVoiceIds?: any;
  voiceFilterIds?: any;
  referenceVoiceFilterIds?: any;
  musicTitleStyle: number;
  animatedImageInfo: AnimatedImageInfo;
  addedSoundMusicInfo: Music;
  originVolume: string;
  musicVolume: string;
  supportDanmaku: boolean;
  hasDanmaku: boolean;
  mufCommentInfoV2?: any;
  behindTheSongMusicIds?: any;
  behindTheSongVideoMusicIds?: any;
  contentOriginalType: number;
  operatorBoostInfo?: any;
}

interface AnimatedImageInfo {
  type: number;
  effect: number;
}

interface OriginalClientText {
  markupText: string;
  textExtra: TextExtra2[];
}

interface TextExtra2 {
  start: number;
  end: number;
  type: number;
  hashtagName: string;
  isCommerce: boolean;
  subType: number;
  lineIdx: number;
  tagId: string;
}

interface InteractPermission {
  duet: number;
  stitch: number;
  duetPrivacySetting: number;
  stitchPrivacySetting: number;
  upvote: number;
  allowAddingToStory: number;
  allowCreateSticker: AllowCreateSticker;
}

interface AllowCreateSticker {
  status: number;
}

interface VideoControl {
  allowDownload: boolean;
  shareType: number;
  showProgressBar: number;
  draftProgressBar: number;
  allowDuet: boolean;
  allowReact: boolean;
  preventDownloadType: number;
  allowDynamicWallpaper: boolean;
  timerStatus: number;
  allowMusic: boolean;
  allowStitch: boolean;
}

interface RiskInfos {
  vote: boolean;
  warn: boolean;
  riskSink: boolean;
  type: number;
  content: string;
}

interface ShareInfo3 {
  shareUrl: string;
  shareWeiboDesc: string;
  shareDesc: string;
  shareTitle: string;
  boolPersist: number;
  shareTitleMyself: string;
  shareTitleOther: string;
  shareLinkDesc: string;
  shareSignatureUrl: string;
  shareSignatureDesc: string;
  shareQuote: string;
  shareDescInfo: string;
  nowInvitationCardImageUrls?: any;
  shareButtonDisplayMode: number;
  buttonDisplayStrategeSource: string;
}

interface TextExtra {
  start: number;
  end: number;
  userId: string;
  type: number;
  hashtagName: string;
  hashtagId: string;
  isCommerce: boolean;
  secUid: string;
}

interface Status {
  awemeId: string;
  isDelete: boolean;
  allowShare: boolean;
  allowComment: boolean;
  isPrivate: boolean;
  withGoods: boolean;
  privateStatus: number;
  inReviewing: boolean;
  reviewed: number;
  selfSee: boolean;
  isProhibited: boolean;
  downloadStatus: number;
}

interface Statistics {
  awemeId: string;
  commentCount: number;
  diggCount: number;
  downloadCount: number;
  playCount: number;
  shareCount: number;
  forwardCount: number;
  loseCount: number;
  loseCommentCount: number;
  whatsappShareCount: number;
  collectCount: number;
}

interface Video {
  playAddr: PlayAddr;
  cover: AvatarLarger;
  height: number;
  width: number;
  dynamicCover: AvatarLarger;
  originCover: AvatarLarger;
  ratio: string;
  downloadAddr: DownloadAddr;
  hasWatermark: boolean;
  bitRate: BitRate[];
  duration: number;
  downloadSuffixLogoAddr: DownloadAddr;
  hasDownloadSuffixLogoAddr: boolean;
  isH265: number;
  cdnUrlExpired: number;
  needSetToken: boolean;
  coverTsp: number;
  miscDownloadAddrs: string;
  tags?: any;
  bigThumbs?: any;
  isBytevc1: number;
  meta: string;
  sourceHdrType: number;
  bitRateAudio?: any;
}

interface BitRate {
  gearName: string;
  qualityType: number;
  bitRate: number;
  playAddr: null[];
  isH265: number;
  isBytevc1: number;
  dubInfos?: any;
  hdrType: string;
  hdrBit: string;
}

interface DownloadAddr {
  uri: string;
  urlList: string[];
  width: number;
  height: number;
  dataSize: number;
}

interface PlayAddr {
  uri: string;
  urlList: string[];
  width: number;
  height: number;
  urlKey: string;
  dataSize: number;
  fileHash: string;
}

interface ChaList {
  cid: string;
  chaName: string;
  desc: string;
  schema: string;
  author: Author2;
  userCount: number;
  shareInfo: ShareInfo2;
  connectMusic: any[];
  type: number;
  subType: number;
  isPgcshow: boolean;
  collectStat: number;
  isChallenge: number;
  viewCount: number;
  isCommerce: boolean;
  hashtagProfile: string;
  chaAttrs?: any;
  bannerList?: any;
  showItems?: any;
  searchHighlight?: any;
}

interface ShareInfo2 {
  shareUrl: string;
  shareWeiboDesc: string;
  shareDesc: string;
  shareTitle: string;
  boolPersist: number;
  shareTitleMyself: string;
  shareTitleOther: string;
  shareSignatureUrl: string;
  shareSignatureDesc: string;
  shareQuote: string;
  shareDescInfo: string;
  nowInvitationCardImageUrls?: any;
}

interface Author2 {
  followersDetail?: any;
  platformSyncInfo?: any;
  geofencing?: any;
  coverUrl?: any;
  itemList?: any;
  typeLabel?: any;
  adCoverUrl?: any;
  relativeUsers?: any;
  chaList?: any;
  needPoints?: any;
  homepageBottomToast?: any;
  canSetGeofencing?: any;
  whiteCoverUrl?: any;
  userTags?: any;
  boldFields?: any;
  searchHighlight?: any;
  mutualRelationAvatars?: any;
  events?: any;
  advanceFeatureItemOrder?: any;
  advancedFeatureInfo?: any;
  userProfileGuide?: any;
  shieldEditFieldInfo?: any;
  canMessageFollowStatusList?: any;
  accountLabels?: any;
}

interface Music {
  id: number;
  idStr: string;
  title: string;
  author: string;
  album: string;
  coverHd: AvatarLarger;
  coverLarge: AvatarLarger;
  coverMedium: AvatarLarger;
  coverThumb: AvatarLarger;
  playUrl: AvatarLarger;
  schemaUrl: string;
  sourcePlatform: number;
  startTime: number;
  endTime: number;
  duration: number;
  extra: string;
  userCount: number;
  position?: any;
  collectStat: number;
  status: number;
  offlineDesc: string;
  ownerId: string;
  ownerNickname: string;
  isOriginal: boolean;
  mid: string;
  bindedChallengeId: number;
  redirect: boolean;
  isRestricted: boolean;
  authorDeleted: boolean;
  isDelVideo: boolean;
  isVideoSelfSee: boolean;
  ownerHandle: string;
  authorPosition?: any;
  preventDownload: boolean;
  strongBeatUrl: AvatarLarger;
  preventItemDownloadStatus: number;
  externalSongInfo: any[];
  secUid: string;
  avatarThumb: AvatarLarger;
  avatarMedium: AvatarLarger;
  avatarLarge: AvatarLarger;
  previewStartTime: number;
  previewEndTime: number;
  isCommerceMusic: boolean;
  isOriginalSound: boolean;
  artists?: any;
  lyricShortPosition?: any;
  muteShare: boolean;
  tagList?: any;
  isAuthorArtist: boolean;
  isPgc: boolean;
  searchHighlight?: any;
  multiBitRatePlayInfo?: any;
  ttToDspSongInfos?: any;
  recommendStatus: number;
}

interface Author {
  uid: string;
  shortId: string;
  nickname: string;
  gender: number;
  signature: string;
  avatarLarger: AvatarLarger;
  avatarThumb: AvatarLarger;
  avatarMedium: AvatarLarger;
  birthday: string;
  followStatus: number;
  awemeCount: number;
  followingCount: number;
  followerCount: number;
  favoritingCount: number;
  totalFavorited: number;
  isBlock: boolean;
  hideSearch: boolean;
  customVerify: string;
  uniqueId: string;
  bindPhone: string;
  specialLock: number;
  needRecommend: number;
  hasFacebookToken: boolean;
  hasTwitterToken: boolean;
  fbExpireTime: number;
  twExpireTime: number;
  hasYoutubeToken: boolean;
  youtubeExpireTime: number;
  roomId: number;
  liveVerify: number;
  authorityStatus: number;
  verifyInfo: string;
  shieldFollowNotice: number;
  shieldDiggNotice: number;
  shieldCommentNotice: number;
  shareInfo: ShareInfo;
  withCommerceEntry: boolean;
  verificationType: number;
  enterpriseVerifyReason: string;
  isAdFake: boolean;
  followersDetail?: any;
  region: string;
  accountRegion: string;
  commerceUserLevel: number;
  liveAgreement: number;
  platformSyncInfo?: any;
  withShopEntry: boolean;
  isDisciplineMember: boolean;
  secret: number;
  hasOrders: boolean;
  preventDownload: boolean;
  showImageBubble: boolean;
  geofencing: any[];
  uniqueIdModifyTime: number;
  videoIcon: ShareQrcodeUrl;
  insId: string;
  googleAccount: string;
  youtubeChannelId: string;
  youtubeChannelTitle: string;
  appleAccount: number;
  withFusionShopEntry: boolean;
  isPhoneBinded: boolean;
  acceptPrivatePolicy: boolean;
  twitterId: string;
  twitterName: string;
  userCanceled: boolean;
  hasEmail: boolean;
  liveAgreementTime: number;
  status: number;
  createTime: number;
  avatarUri: string;
  followerStatus: number;
  commentSetting: number;
  duetSetting: number;
  reflowPageGid: number;
  reflowPageUid: number;
  userRate: number;
  downloadSetting: number;
  downloadPromptTs: number;
  reactSetting: number;
  liveCommerce: boolean;
  coverUrl: CoverUrl[];
  language: string;
  hasInsights: boolean;
  shareQrcodeUri: string;
  itemList?: any;
  userMode: number;
  userPeriod: number;
  isStar: boolean;
  cvLevel: string;
  typeLabel: any[];
  adCoverUrl?: any;
  commentFilterStatus: number;
  avatar168X168: AvatarLarger;
  avatar300X300: AvatarLarger;
  relativeUsers?: any;
  chaList?: any;
  secUid: string;
  needPoints?: any;
  homepageBottomToast?: any;
  canSetGeofencing?: any;
  whiteCoverUrl?: any;
  userTags?: any;
  stitchSetting: number;
  boldFields?: any;
  qaStatus: number;
  searchHighlight?: any;
  mutualRelationAvatars?: any;
  events?: any;
  matchedFriend: MatchedFriend;
  advanceFeatureItemOrder?: any;
  advancedFeatureInfo?: any;
  userProfileGuide?: any;
  shieldEditFieldInfo?: any;
  friendsStatus: number;
  canMessageFollowStatusList?: any;
  accountLabels?: any;
}

interface MatchedFriend {
  videoItems?: any;
}

interface CoverUrl {
  uri: string;
  urlList: null[];
  width: number;
  height: number;
}

interface ShareInfo {
  shareUrl: string;
  shareWeiboDesc: string;
  shareDesc: string;
  shareTitle: string;
  shareQrcodeUrl: ShareQrcodeUrl;
  shareTitleMyself: string;
  shareTitleOther: string;
  shareDescInfo: string;
  nowInvitationCardImageUrls?: any;
}

interface ShareQrcodeUrl {
  uri: string;
  urlList: any[];
  width: number;
  height: number;
}

interface AvatarLarger {
  uri: string;
  urlList: string[];
  width: number;
  height: number;
}

